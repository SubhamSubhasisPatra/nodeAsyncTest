const fetch = require("node-fetch");

module.exports = class Test {
  addPromise = (a, b) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(a + b);
      }, 1000);
    });
  };

  async dummyData() {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    let res = await fetch(url);
    return res;
  }
};
