var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
module.exports = class MyClass {
  constructor() {
    console.log("start");
  }

  gretting(str) {
    console.log(str);
  }

  add(a, b) {
    return a + b;
  }

  anotehrAdd(a, b) {
    this.gretting("hello");
    return this.add(a, b);
  }

  callTheCallBack(callback) {
    callback();
  }

  testPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.add(10, 294));
      }, 1000);
    });
  }

  xhrfn() {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "http://www.baidu.com", true);
      console.log(xhr.responseText);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.status);
          }
        }
      };
    });
  }
};
