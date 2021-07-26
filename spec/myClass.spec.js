const MyClass = require("../src/myClass");
const myObj = new MyClass();
const nock = require("nock");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const sinon = require("sinon");
const chai = require("chai");
const expect = require("chai").expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
describe.skip("Test Suit", () => {
  it("should add two number", () => {
    expect(myObj.add(1, 2)).to.equal(3);
  });

  it("should spy on add method ", () => {
    let spy = sinon.spy(myObj, "add");
    let a = 10,
      b = 20;
    myObj.anotehrAdd(a, b);
    // sinon.assert.calledTwice(spy)
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(a, b)).to.be.true;
  });

  it("should call the callback ", () => {
    let callback = sinon.spy();
    myObj.callTheCallBack(callback);
    expect(callback.calledOnce).to.be.true;
  });

  it("Should mock the gretting ", () => {
    let mock = sinon.mock(myObj);
    let expectation = mock.expects("gretting");
    expectation.exactly(1);
    expectation.withArgs("hello");
    expectation.returns("hello 1");
    myObj.anotehrAdd(10, 20);
    mock.verify();
  });
});

describe.skip("Check The Stub", () => {
  it("should stub the add ", () => {
    let stub = sinon.stub(myObj, "add");
    let mock = sinon.mock(myObj);
    let expectation = mock.expects("gretting");
    expectation.exactly(1);
    stub.withArgs(10, 20).returns(30);
    expect(myObj.anotehrAdd(10, 20)).to.be.equal(30);
    mock.verify();
  });
});

describe.skip("Check The Async", () => {
  it("should Check the Sync Function", function () {
    this.timeout(0);
    // await myObj.testPromise().then((result)=>{
    //     expect(result).to.be.equal(304)
    // })
    return expect(myObj.testPromise()).to.eventually.equal(34);
  });
});

describe.skip("Check The XHR", () => {
  it("should Check the XHR fn", async function () {
    this.timeout(0);
    await myObj
      .xhrfn()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err");
      });
  });
});
