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
    this.timeout(0);
    const spy = sinon.spy(test, "addPromise");
    let res = await test.addPromise(1, 2);
    expect(res).to.be.equal(3);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(1, 2)).to.be.true;
    expect(spy.calledOn(test)).to.be.true;
    expect(test.addPromise.getCall(0).args.length).to.equal(2);
    spy.restore();
  });

  it("Shoud check for the getter method", async function () {
    this.timeout(0);
    const spy = sinon.spy(test, "dummyData");
    let res = await test.dummyData();
    expect(typeof res).to.be.deep.equal("object");
    expect(res.status).to.be.equal(200);
    expect(spy.calledOnce).to.be.true;
    expect(test.dummyData.getCall(0).args.length).to.equal(0);
  });
});
