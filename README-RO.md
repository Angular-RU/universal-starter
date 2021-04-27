# Angular RU Universal Starter

[![Angular-RU](https://img.shields.io/badge/Telegram_chat:-Angular_RU-216bc1.svg?style=flat)](https://t.me/angular_ru) [![Angular-RU Universal](https://img.shields.io/badge/Telegram_chat:-Angular_RU_Universal-14b102.svg?style=flat)](https://t.me/angular_universal_ru) [![Angular-RO](https://img.shields.io/badge/Telegram_chat:-Angular_RO-14b102.svg?style=flat)](https://t.me/angular_ro) [![JS-RO](https://img.shields.io/badge/Telegram:-JS_RO-14b102.svg?style=flat)](https://t.me/js_ro) [![Build Status](https://semaphoreci.com/api/v1/angularru/angular-universal-starter/branches/master/badge.svg)](https://semaphoreci.com/angularru/angular-universal-starter)

> Repozitoriul Angular CLI și Angular Universal

**Traduceri**:

- [Rusă](./README-RU.md)
- [Engleză](./README.md)
- [Română](./README-RO.md)

**Resurse**:

- chat public rusesc https://t.me/angular_universal_ru
- chat public Angular românesc https://t.me/angular_ro
- https://ssr.angular.su/ - rendering pe server master
- https://csr.angular.su/ - rendering pe client master

# Planuri:

- [x] Angular 11
- [x] `document is not defined` și `window is not defined` - [aici](./defined.md)
- [x] [Angular Material2](https://material.angular.io/) **UI componente** - [branch aparte](https://github.com/Angular-RU/angular-universal-starter/tree/material2)
- [x] [Primeng](https://www.primefaces.org/primeng/) **UI компоненты** - [branch aparte](https://github.com/Angular-RU/angular-universal-starter/tree/primeng)
- [x] importăm modulele în dependență de platformă (`MockServerBrowserModule`)
- [x] comunicăm cu api pe server `TransferHttp`
- [x] folosim Cookies pe server `UniversalStorage`
- [x] folosim **[ngx-meta](https://github.com/fulls1z3/ngx-meta)** pentru SEO (_title, meta tags, and Open Graph tags for social sharing_).
- [x] folosim ngx-translate pentru i18n
- [x] folosim ORIGIN_URL - pentru drumuri absolute
- [x] @angular/service-worker(`ng add @angular/pwa --project universal-demo`)

## Cum să pornim?

- `yarn` sau `npm install`
- `yarn start` sau `npm run start` - pentru rendering pe client
- `yarn ssr` sau `npm run ssr` - pentru rendering pe server
- `yarn build:universal` sau `npm run build:universal` - pentru production
- `yarn server` sau `npm run server` - pentru a porni serverul
- `yarn build:prerender` sau `npm run build:prerender` - pentru a genera statica pe `static.paths.ts`
- pentru a porni regimul watch, în ssr folosiți `npm run ssr:watch`

## Cum să folosesc repozitoriul în proiectul meu?

Pentru a adăuga ssr în proiectul dumneavoastră e nevoie de următoarele fișiere:

- .angular-cli.json
- server.ts
- prerender.ts
- webpack.config.js
- main.server.ts
- main.browser.ts
- shared/\*
- forStorage/\*
- environments/\*
- app.browser.module.ts
- app.server.module.ts

## Linkuri

Exemplu oficial în engleză: https://github.com/angular/universal-starter
Module folosite pentru universal:

- https://github.com/angular/universal/tree/master/modules/aspnetcore-engine - motorul pentru .net core
- https://github.com/angular/universal/tree/master/modules/common - TransferHttpCacheModule
- https://github.com/angular/universal/tree/master/modules/express-engine - Express Engine pentru a porni renderingul pe node, folosim în repozitoriul nostru. Fiți atenți, versiunea acutală nu mai mică de 5.0.0-beta.5
- https://github.com/angular/universal/tree/master/modules/hapi-engine - Hapi Engine un motor alternativă. În exemplu nu folosim, în principui nu-i mare diferența în conectare față de express-engine
- https://github.com/angular/universal/tree/master/modules/module-map-ngfactory-loader - modul pentru LazyLoading - e ceva folositor. Fiți atenți, versiunea actuală nu mai mică de 5.0.0-beta.5

## Caracteristici (Important)

- modulul pentru TransferHttp folosește `import { TransferState } from '@angular/platform-browser';` și e nevoie de el pentru a realiza interogările la rest api pe server și pentru a evita dublarea interogărilor (pe client). Uitați-vă la `home.component.ts` (așteptați 3 secunde)

```ts
this.http.get('https://reqres.in/api/users?delay=3').subscribe((result) => {
  this.result = result;
});
```

- `export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });` - ca pagina să nu clipească!

- pentru a lucra cu cookie e scris `AppStorage`, care cu ajutorul DI ne permite să facem realizare pentru server și browser. Uitați-vă la `server.storage.ts` și `browser.storage.ts` pentru a vedea realizările. În `server.ts` este

```ts
providers: [
  {
    provide: REQUEST,
    useValue: req,
  },
  {
    provide: RESPONSE,
    useValue: res,
  },
];
```

pentru a lucra cu REQUEST și RESPONSE prin DI - asta-i necesar pentru a lucra cu UniversalStorage când folosim cookies.

- webpack.config.js e scris doar ca să strângă fișierul server.ts și server.js, pentru că angular-cli are o [eroare](https://github.com/angular/angular-cli/issues/7200) la 3d dependențele.
- pentru a rezolva o mare parte din probleme se folosește următorul cod `server.ts`

Rezolvarea problemei cu variabilele globale, inclusiv `document is not defined` și `window is not defined`

```ts
const domino = require('domino');
const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '.', 'dist', 'index.html')).toString();
const win = domino.createWindow(template);
const files = fs.readdirSync(`${process.cwd()}/dist-server`);
const styleFiles = files.filter((file) => file.startsWith('styles'));
const hashStyle = styleFiles[0].split('.')[1];
const style = fs
  .readFileSync(path.join(__dirname, '.', 'dist-server', `styles.${hashStyle}.bundle.css`))
  .toString();

global['window'] = win;
Object.defineProperty(win.document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});
global['document'] = win.document;
global['CSS'] = style;
global['Prism'] = null;
``````ts
global['navigator'] = req['headers']['user-agent'];
```

asta ne permite să excludem o parte din problemele apărute cu `undefined`.
