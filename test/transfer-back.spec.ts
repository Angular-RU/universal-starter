import { expect } from 'chai';

const request = require('./request-service');
let body: string;
const page = '/back';
const url = `http://localhost:4000${page}`;

describe(`test work http request ${page} with ssr`, () => {
  it('Should be exist "total_pages"', async () => {
    this.timeout(5000);
    body = await request(url);
    return expect(body.includes('total_pages')).to.equal(true);
  });

  it('Should be exist "createdAt"', async () => {
    this.timeout(5000);
    body = await request(url);
    expect(body.includes('createdAt')).to.equal(true);
  });
});
