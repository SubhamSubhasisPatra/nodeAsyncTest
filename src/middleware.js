const request = require("request");

module.exports = {
  getAlbumById: async function (id) {
    const url = `https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=3`;
    return new Promise((resolve, reject) => {
      request.get(url, (err, res, body) => {
        if (err) {
          return reject(err);
        } else {
          resolve(JSON.parse(body));
        }
      });
    });
  },
};
