import 'zone.js/dist/zone-node';
import 'reflect-metadata';

// for debug
require('source-map-support').install();

// for tests
const test = process.env['TEST'] === 'true';

// ssr DOM
const domino = require('domino');
const fs = require('fs');
const path = require('path');
// index from browser build!
const template = fs.readFileSync(path.join(__dirname, '.', 'dist', 'index.html')).toString();
// for mock global window by domino
const win = domino.createWindow(template);
// from server build
const files = fs.readdirSync(`${process.cwd()}/dist-server`);
// mock
global['window'] = win;
// not implemented property and functions
Object.defineProperty(win.document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});
// mock documnet
global['document'] = win.document;
// othres mock
global['CSS'] = null;
// global['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest;
global['Prism'] = null;

import { enableProdMode } from '@angular/core';
import * as express from 'express';
import * as compression from 'compression';
import * as cookieparser from 'cookie-parser';
// lazy loader
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');
// get server main
const mainFiles = files.filter((file) => file.startsWith('main'));
// with hash
const hash = mainFiles[0].split('.')[1];
// main from server impl.
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`./dist-server/main.${hash}`);
import { ngExpressEngine } from '@nguniversal/express-engine';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
// port
const PORT = process.env.PORT || 4000;
// static path from prerenders
import { ROUTES } from './static.paths';
// for test
import { exit } from 'process';
import { NgxRequest, NgxResponse } from '@gorniv/ngx-universal';

enableProdMode();

const app = express();
// gzip
app.use(compression());
// cokies
app.use(cookieparser());

// redirects!
const redirectowww = false;
const redirectohttps = false;
const wwwredirecto = true;
app.use((req, res, next) => {
  // for domain/index.html
  if (req.url === '/index.html') {
    res.redirect(301, 'https://' + req.hostname);
  }

  // check if it is a secure (https) request
  // if not redirect to the equivalent https url
  if (
    redirectohttps &&
    req.headers['x-forwarded-proto'] !== 'https' &&
    req.hostname !== 'localhost'
  ) {
    // special for robots.txt
    if (req.url === '/robots.txt') {
      next();
      return;
    }
    res.redirect(301, 'https://' + req.hostname + req.url);
  }

  // www or not
  if (redirectowww && !req.hostname.startsWith('www.')) {
    res.redirect(301, 'https://www.' + req.hostname + req.url);
  }

  // www or not
  if (wwwredirecto && req.hostname.startsWith('www.')) {
    const host = req.hostname.slice(4, req.hostname.length);
    res.redirect(301, 'https://' + host + req.url);
  }

  // for test
  if (test && req.url === '/test/exit') {
    res.send('exit');
    exit(0);
    return;
  }

  next();
});

// engine
app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)],
  }),
);
// must
app.set('view engine', 'html');
app.set('views', 'src');
// all search
app.get('*.*', express.static(path.join(__dirname, '.', 'dist')));
// static
app.get(ROUTES, express.static(path.join(__dirname, '.', 'static')));

// cache
const NodeCache = require('node-cache');
// stdTTL: (default: 0) the standard ttl as number in seconds for every generated cache element. 0 = unlimited
// checkperiod: (default: 600) The period in seconds, as a number, used for the automatic delete check interval. 0 = no periodic check.
const myCache = new NodeCache({ stdTTL: 5 * 60, checkperiod: 120 });

const cache = () => {
  return (req, res, next) => {
    const key = '__express__' + req.originalUrl || req.url;
    const exists = myCache.has(key);
    if (exists) {
      console.log(`from cache: `, req.originalUrl || req.url);
      const cachedBody = myCache.get(key);
      res.send(cachedBody);
      return;
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        myCache.set(key, body);
        res.sendResponse(body);
      };
      next();
    }
  };
};

// dynamic render
app.get('*', cache(), (req, res) => {
  // mock navigator from req.
  global['navigator'] = req['headers']['user-agent'];
  const http =
    req.headers['x-forwarded-proto'] === undefined ? 'http' : req.headers['x-forwarded-proto'];

  const url = req.originalUrl;
  // tslint:disable-next-line:no-console
  console.time(`GET: ${url}`);
  res.render(
    '../dist/index',
    {
      req: req,
      res: res,
      // provers from server
      providers: [
        // for http and cookies
        {
          provide: REQUEST,
          useValue: req,
        },
        {
          provide: RESPONSE,
          useValue: res,
        },
        /// for cookie
        {
          provide: NgxRequest,
          useValue: req,
        },
        {
          provide: NgxResponce,
          useValue: res,
        },
        // for absolute path
        {
          provide: 'ORIGIN_URL',
          useValue: `${http}://${req.headers.host}`,
        },
      ],
    },
    (err, html) => {
      if (!!err) {
        throw err;
      }

      // tslint:disable-next-line:no-console
      console.timeEnd(`GET: ${url}`);
      res.send(html);
    },
  );
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
