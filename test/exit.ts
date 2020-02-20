const request = require('./request-service');

describe('exit from server', () => {
it('Should be exit', async () => {
    await request('http://localhost:4000/test/exit');
  });
});
