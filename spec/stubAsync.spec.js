const expect = require("chai").expect;
const Test = require("../src/stubAsyn");
const sinon = require("sinon");
const assert = require("assert");

describe("Check for the async function", () => {
  let test;
  beforeEach(() => {
    test = new Test();
    expect(test).to.be.an.instanceof(Test);
  });

  it("should check with a Spy", async function () {
    const spy = sinon.spy(test, "addPromise");
    let res = await test.addPromise(1, 2);
    expect(res).to.be.equal(3);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(1, 2)).to.be.true;
    expect(spy.calledOn(test)).to.be.true;
    expect(test.addPromise.firstCall.args.length).to.equal(2);
    spy.restore();
  });
});
