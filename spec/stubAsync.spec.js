const expect = require("chai").expect;
const Test = require("../src/stubAsyn");
const sinon = require("sinon");

describe("Check for the async function", () => {
  let test;
  beforeEach(() => {
    test = new Test();
    expect(test).to.be.an.instanceof(Test);
  });

  it("should check with a stub", async function () {
    const stub = sinon.stub(test, "addPromise");
    expect(await test.addPromise.firstCall.args.length).to.equal(2);
    // expect(await test.addPromise(1, 2)).to.be.equal(3);
    // let res = await test.addPromise(10, 20);
    // console.log(res);
  });
});
