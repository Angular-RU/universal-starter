import { expect } from 'chai';

const request = require('./request-service');
let body: string;

describe('test work http request with ssr', () => {
  it('Should be exist "total_pages"', async () => {
    body = await request('http://localhost:4000/back');
    return expect(body.includes('total_pages')).to.equal(true);
  });

  it('Should be exist "createdAt"', async () => {
    body = await request('http://localhost:4000/back');
    expect(body.includes('createdAt')).to.equal(true);
  });
});
