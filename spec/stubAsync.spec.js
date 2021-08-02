const expect = require("chai").expect;
const Test = require("../src/stubAsyn");
const indexPage = require("../src/indexPage");
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
    spy.restore();
  });

  context("Check with Stub", () => {
    it("shoud check for the user is logged in or not", () => {
      let user = {
        isLoggedIn: () => {},
      };
      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);
      // expect(user.isLoggedIn.calledOnce).to.be.true;
      let req = {
        user: user,
      };

      let res = {
        send: sinon.spy(),
      };

      indexPage.getIndexPage(req, res);
      expect(res.send.calledOnce).to.be.true;
      expect(res.send.firstCall.args[0]).to.equal("Welcome");
      expect(isLoggedInStub.calledOnce).to.be.true;
      // console.log(isLoggedInStub);
    });

    it("Shoud fail if not authenticated", () => {
      let user = {
        isLoggedIn: () => {},
      };

      let stub = sinon.stub(user, "isLoggedIn").returns(false);
      let req = {
        user: user,
      };
      let res = {
        send: sinon.spy(),
      };

      // excute the function
      try {
        indexPage.getIndexPage(req, res);
        expect(res.send.calledOnce).to.be.true;
      } catch (error) {
        expect(error.message).to.be.equal("User is not authenticated");
      } finally {
      }
      expect.fail("Should have thrown");
    });
  });
});
