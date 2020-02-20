const page = '/home';
const chai = require('chai');
const request = require('./request-service');
let body: string;
const url = `http://localhost:4000${page}`;

describe(`test work ${page} with ssr`, () => {
  it('Should be exist "Главная страница"', async () => {
    body = await request(url);
    return chai.expect(body.includes('Главная страница')).to.equal(true);
  });

  it('Should be exist "home.notranslatewarn"', async () => {
    body = await request(url);
    chai.expect(body.includes('home.notranslatewarn')).to.equal(true);
  });
});
