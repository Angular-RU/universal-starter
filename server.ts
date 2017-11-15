import { HttpClient } from '@angular/common/http';
import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import * as compression from 'compression';
import * as cookieparser from 'cookie-parser';
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(`${process.cwd()}/dist-server`);
const mainFiles = files.filter(file => file.startsWith('main'));
const hash = mainFiles[0].split('.')[1];
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`./dist-server/main.${hash}.bundle`);
import { ngExpressEngine } from '@nguniversal/express-engine';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
const PORT = 4000;

enableProdMode();

const app = express();
app.use(compression());
app.use(cookieparser());

const template = fs.readFileSync(path.join(__dirname, '.', 'dist', 'index.html')).toString();

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', 'src');

app.get('*.*', express.static(path.join(__dirname, '.', 'dist')));

app.get('*', (req, res) => {
  global['window'] = global;
  global['document'] = template;
  global['navigator'] = req['headers']['user-agent'];
  global['CSS'] = null;
  // global['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest;
  global['Prism'] = null;

  res.render('../dist/index', {
    req: req,
    res: res,
    providers: [
      {
        provide: REQUEST, useValue: (req)
      },
      {
        provide: RESPONSE, useValue: (res)
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
