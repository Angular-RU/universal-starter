import { expect } from 'chai';

const request = require('./request-service');
let body: string;
const page = '/home';
const url = `http://localhost:4000${page}`;

describe(`test work ${page} with ssr`, () => {
  it('Should be exist "Главная страница"', async () => {
    body = await request(url);
    return expect(body.includes('Главная страница')).to.equal(true);
  });

  it('Should be exist "home.notranslatewarn"', async () => {
    body = await request(url);
    expect(body.includes('home.notranslatewarn')).to.equal(true);
  });
});
