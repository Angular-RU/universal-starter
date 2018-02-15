# Angular RU Universal Starter [![Angular-RU](https://img.shields.io/badge/Telegram_chat:-Angular_RU-216bc1.svg?style=flat)](https://t.me/angular_ru) [![Angular-RU Universal](https://img.shields.io/badge/Telegram_chat:-Angular_RU_Universal-14b102.svg?style=flat)](https://t.me/angular_universal_ru)

[![Build Status](https://semaphoreci.com/api/v1/angularru/angular-universal-starter/branches/master/badge.svg)](https://semaphoreci.com/angularru/angular-universal-starter)

> Repository with Angular CLI and Angular Universal

**Translations**:
- [Русский](./README-RU.md)
- [English](./README.md)
- [Românesc](./README-RO.md)

**Resources**:
- public chat https://t.me/angular_universal_ru
- http://ssr.angular.su/ - server-side rendering of the master
- http://csr.angular.su/ - client rendering master

# Plans:
- [x] Angular 5
- [x] `document is not defined` and `window is not defined` - [here](./defined.md)
- [x] [Angular Material2](https://material.angular.io/) **UI components** - [individual branch](https://github.com/Angular-RU/angular-universal-starter/tree/material2)
- [x] [Primeng](https://www.primefaces.org/primeng/) **UI components** - [individual branch] (https://github.com/Angular-RU/angular-universal-starter/tree/primeng)
- [x] modules import depending on the platform (`MockServerBrowserModule`)
- [x] execution of queries to api on the server `TransferHttp`
- [x] work with cookies on the server `UniversalStorage`
- [x] Uses **[ngx-meta](https://github.com/fulls1z3/ngx-meta)** for SEO (*title, meta tags, and Open Graph tags for social sharing*).
- [x] uses ngx-translate to support internationalization (i18n)
- [x] uses ORIGIN_URL - for absolute queries
- [ ] @angular/service-worker
- [ ] Ionic - it is necessary to compile the web version while there are problems [separate branch](https://github.com/Angular-RU/angular-universal-starter/tree/ionic)

## How to start
- `yarn` or `npm install`
- `yarn start` or `npm run start` - for client rendering
- `yarn ssr` or `npm run ssr` - for server-side rendering
- `yarn build:universal` or `npm run build:universal` - for assembly in release
- `yarn server` or `npm run server` - to start the server
- `yarn build:prerender` or `npm run build:prerender` - to generate static by `static.paths.ts`
- for watch with ssr:
  - `npm run ssr:cw` - build client
  - `npm run ssr:sw` - build server
  - `npm run ssr:webpack` -build `server.js`
  - `npm run ssr:server` - server with watch

## How to use this repository in your project:
To transfer ssr to your repository, you need the following files:
 - .angular-cli.json
 - server.ts
 - prerender.ts
 - webpack.config.js
 - main.server.ts
 - main.browser.ts
 - modules/*
 - forStorage/*
 - environments/*
 - app.browser.module.ts
 - app.server.module.ts

## References
Official example in English: https://github.com/angular/universal-starter
Modules used for universal:
- https://github.com/angular/universal/tree/master/modules/aspnetcore-engine - web for .net core
- https://github.com/angular/universal/tree/master/modules/common - TransferHttpCacheModule, at the moment I do not use it if you know where and why it should be installed - write to me or in issue, pull request
- https://github.com/angular/universal/tree/master/modules/express-engine - Express Engine to run the rendering in node, in our application is used. Please note that the current version is not lower than 5.0.0-beta.5
- https://github.com/angular/universal/tree/master/modules/hapi-engine - Hapi Engine is an alternative engine for rendering. In the example is not used, in principle in the connection scheme does not differ from express-engine
- https://github.com/angular/universal/tree/master/modules/module-map-ngfactory-loader - the module search module for LazyLoading - the thing needed and used. Please note that the current version is not lower than 5.0.0-beta.5

## Features (Important)
- The module for TransferHttp uses `import {TransferState} from '@angular/platform-browser';` and it is necessary to implement the request rest api on the server and the absence of the second request a second time. See `home.component.ts` (delay 3c)

```ts
this.http.get('https://reqres.in/api/users?delay=3').subscribe(result => {
    this.result = result;
});
```
- `export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });`- so that there is no flashing of the page!

- to work with cookies, it is written `AppStorage`, which with DI allows you to give different implementations for the server and the browser. See `server.storage.ts` and `browser.storage.ts` for implementations. In `server.ts` there is

```ts
providers: [
    {
        provide: REQUEST, useValue: (req)
    },
    {
        provide: RESPONSE, useValue: (res)
    }
]
```
to work with REQUEST and RESPONSE via DI - this is necessary for implementing UniversalStorage when working with cookies.

- `webpack.config.js` is written exclusively for building server.ts file in server.js, since angular-cli has [bug](https: //github.com / angular/angular-cli/issues/7200) to work with 3d dependencies. - To solve some problems, use the following code in `server.ts` Solving the problems of global variables, including `document is not defined` and `window is not defined`
```ts
const domino = require('domino');
const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '.', 'dist', 'index.html')).toString();
const win = domino.createWindow(template);
const files = fs.readdirSync(`${process.cwd()}/dist-server`);
// const styleFiles = files.filter(file => file.startsWith('styles'));
// const hashStyle = styleFiles[0].split('.')[1];
// const style = fs.readFileSync(path.join(__dirname, '.', 'dist-server', `styles.${hashStyle}.bundle.css`)).toString();

global['window'] = win;
Object.defineProperty(win.document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  },
});
global['document'] = win.document;
global['CSS'] = null;
// global['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest;
global['Prism'] = null;
```

```ts
  global['navigator'] = req['headers']['user-agent'];
```
this allows you to remove some of the problems when working with `undefined`.
