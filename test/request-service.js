const request = require('request');

module.exports = async (value) =>
  new Promise((resolve, reject) => {
    request.get(
      value,
      { proxy: '', headers: { Cookie: 'token=mock' } },
      (error, response, data) => {
        if (error) {
          console.log(error);
          reject(error);
        } else resolve(data);
      },
    );
  });
