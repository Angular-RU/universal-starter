# angular-universal-starter
Репозиторий с angular cli и universal

- публичный чат https://t.me/angular_universal_ru

## Как запустить
- `yarn` или `npm install`
- `npm run start` - для клиенского рендеринга
- `npm run ssr` -  для серверного рендеринга
- `npm run build:universal` - для сборки в релиз
- `npm run server` - для запуска сервера

## Ссылки
Официальный пример на анлийиском: https://github.com/angular/universal-starter 
Модули используемые для universal:
- https://github.com/angular/universal/tree/master/modules/aspnetcore-engine -движок для .net core
- https://github.com/angular/universal/tree/master/modules/common - TransferHttpCacheModule, на данный момент мной не используется, если знаете куда и зачем его встаить - напишите мне или в issue, pull request
- https://github.com/angular/universal/tree/master/modules/express-engine - Express Engine для запуска рендеринга в node, в нашем приложении используется. Обратите внимание, что актуальная версия  не ниже 5.0.0-beta.5
- https://github.com/angular/universal/tree/master/modules/hapi-engine -  Hapi Engine альтернативный движок для рендеринга. В примере не используется, принципиально в схеме подключения не отличается от express-engine
- https://github.com/angular/universal/tree/master/modules/module-map-ngfactory-loader - модуль поиска модулей для LazyLoading - вещь нужная и  используемая. Обратите внимание, что актуальная версия  не ниже 5.0.0-beta.5

## Особенности
- модуль для TransferHttp  использует `import { TransferState } from '@angular/platform-browser';` и необходим для реализации запроса rest api  на сервере и остутствия повторного запроса второй раз. Смотрите `home.component.ts` (задержка 3с)

```ts
this.http.get('https://reqres.in/api/users?delay=3').subscribe(result => {
    this.result = result;
});
```

- для работы с куками написан `AppStorage`,  которыйй при помощи DI  позволяет отдавать разную реализацию для сервера и бразуера. Смотрите `server.storage.ts` и `browser.storage.ts` по реализациям. В `server.ts`  есть 
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
для работы с REQUEST и RESPONSE через DI -  это необходимо для реализации UniversalStorage при работе с cookies.

- webpack.config.js  прописан исключительно для сборки файла server.ts в  server.js, так как angular-cliт имеет [баг](https://github.com/angular/angular-cli/issues/7200) для работы с 3d зависимостями.
- для решения части проблем используется следущий код в `server.ts`
```ts
  global['window'] = global;
  global['document'] = template;
  global['navigator'] = req['headers']['user-agent'];
  global['CSS'] = null;
```
это позволяет убрать часть проблем при работе с `undefined`.



