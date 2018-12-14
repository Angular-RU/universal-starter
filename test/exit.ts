const request = require('./request-service');

describe('exit node server', () => {
  it('Should be exit', async () => {
    await request('http://localhost:4000/test/exit');
  });
});
