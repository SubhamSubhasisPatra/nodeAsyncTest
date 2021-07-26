module.exports = class Test {
  addPromise = (a, b) => {
    return Promise.resolve(a + b);
  };
};
