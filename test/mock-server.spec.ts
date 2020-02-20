const page = '/mock';
const chai = require('chai');
const request = require('./request-service');
let body: string;
const url = `http://localhost:4000${page}`;

describe(`test work ${page} with ssr`, () => {

  it('Should be exist "Страница с мокапом"', async () => {
    body = await request(url);
    return chai.expect(body.includes('Страница с мокапом')).to.equal(true);
  });

  it('Should be exist "mock-server works"', async () => {
    body = await request(url);
    chai.expect(body.includes('mock-server works')).to.equal(true);
  });
});
