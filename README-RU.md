# Angular RU Universal Starter [![Angular-RU](https://img.shields.io/badge/Telegram_chat:-Angular_RU-216bc1.svg?style=flat)](https://t.me/angular_ru) [![Angular-RU Universal](https://img.shields.io/badge/Telegram_chat:-Angular_RU_Universal-14b102.svg?style=flat)](https://t.me/angular_universal_ru)

[![Build Status](https://semaphoreci.com/api/v1/angularru/angular-universal-starter/branches/master/badge.svg)](https://semaphoreci.com/angularru/angular-universal-starter)

> Репозиторий с Angular CLI и Angular Universal

**Переводы**:

- [Русский](./README-RU.md)
- [English](./README.md)
- [Românesc](./README-RO.md)

**Ресурсы**:

- публичный чат https://t.me/angular_universal_ru
- https://ssr.angular.su/ - серверный рендеринг master
- https://csr.angular.su/ - клиенский рендеринг master

# Планы:

- [x] Angular 11
- [x] `document is not defined` и `window is not defined` - [тут](./defined.md)
- [x] [Angular Material2](https://material.angular.io/) **UI компоненты** - [отдельная ветка](https://github.com/Angular-RU/angular-universal-starter/tree/material2)
- [x] [Primeng](https://www.primefaces.org/primeng/) **UI компоненты** - [отдельная ветка](https://github.com/Angular-RU/angular-universal-starter/tree/primeng)
- [x] импорт модулей в зависимости от платформы (`MockServerBrowserModule`)
- [x] выполнение запросов к api на сервере `TransferHttp`
- [x] работа с Cookies на сервере `UniversalStorage`
- [x] Uses **[ngx-meta](https://github.com/fulls1z3/ngx-meta)** для SEO (_title, meta tags, and Open Graph tags for social sharing_).
- [x] используется ngx-translate для поддержки интернационализации (i18n)
- [x] используется ORIGIN_URL - для абсолютных запросов
- [x] @angular/service-worker(`ng add @angular/pwa --project universal-demo`)

## Как запустить

- `yarn` или `npm install`
- `yarn start` или `npm run start` - для клиенского рендеринга
- `yarn ssr` или `npm run ssr` - для серверного рендеринга
- `yarn build:universal` или `npm run build:universal` - для сборки в релиз
- `yarn server` или `npm run server` - для запуска сервера
- `yarn build:prerender` или `npm run build:prerender` - для генерации статики по `static.paths.ts`
- для запуска отслеживания изменения кода при ssr запустите `npm run ssr:watch`

## Как использовать этот репозиторий в своем проекте:

Для переноса ssr в свой репозиторий вам необходимы файлы:

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

## Ссылки

Официальный пример на анлийиском: https://github.com/angular/universal-starter
Модули используемые для universal:

- https://github.com/angular/universal/tree/master/modules/aspnetcore-engine -движок для .net core
- https://github.com/angular/universal/tree/master/modules/common - TransferHttpCacheModule для синхронизации запросов сервера и клиента
- https://github.com/angular/universal/tree/master/modules/express-engine - Express Engine для запуска рендеринга в node, в нашем приложении используется. Обратите внимание, что актуальная версия не ниже 5.0.0-beta.5
- https://github.com/angular/universal/tree/master/modules/hapi-engine - Hapi Engine альтернативный движок для рендеринга. В примере не используется, принципиально в схеме подключения не отличается от express-engine
- https://github.com/angular/universal/tree/master/modules/module-map-ngfactory-loader - модуль поиска модулей для LazyLoading - вещь нужная и используемая. Обратите внимание, что актуальная версия не ниже 5.0.0-beta.5

## Особенности(Важно)

- модуль для TransferHttp использует `import { TransferState } from '@angular/platform-browser';` и необходим для реализации запроса rest api на сервере и остутствия повторного запроса второй раз. Смотрите `home.component.ts` (задержка 3с)

```ts
this.http.get('https://reqres.in/api/users?delay=3').subscribe((result) => {
  this.result = result;
});
```

- `export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });` - чтобы не было мигания страницы!

- для работы с куками написан `AppStorage`, который при помощи DI позволяет отдавать разную реализацию для сервера и бразуера. Смотрите `server.storage.ts` и `browser.storage.ts` по реализациям. В `server.ts` есть

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

для работы с REQUEST и RESPONSE через DI - это необходимо для реализации UniversalStorage при работе с cookies.

- webpack.config.js прописан исключительно для сборки файла server.ts в server.js, так как angular-cli имеет [баг](https://github.com/angular/angular-cli/issues/7200) для работы с 3d зависимостями.
- для решения части проблем используется следущий код в `server.ts`

Решение проблем глобальных переменных, в том числе `document is not defined` и `window is not defined`

```````ts
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
```````

это позволяет убрать часть проблем при работе с `undefined`.
