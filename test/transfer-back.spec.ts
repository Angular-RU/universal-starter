const chai = require('chai');
const request = require('./request-service');
let body: string;
const page = '/back';
const url = `http://localhost:4000${page}`;

describe(`test work http request ${page} with ssr`, () => {
  it('Should be exist "total_pages"', async () => {
    body = await request(url);
    return chai.expect(body.includes('total_pages')).to.equal(true);
  });

  it('Should be exist "createdAt"', async () => {
    body = await request(url);
    return chai.expect(body.includes('createdAt')).to.equal(true);
  });
});
