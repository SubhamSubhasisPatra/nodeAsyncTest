const chai = require("chai");
const expect = chai.expect;
const chaiAsPromissed = require("chai-as-promised");
chai.use(chaiAsPromissed);
const sinon = require("sinon");

let users = require("./users");
let User = require("../src/user");
const mongoose = require("mongoose");
var sandbox = sinon.sandbox.create();

describe("Test The User ", () => {
  let findStub;
  let sampleArgs;
  let sampleUser;
  beforeEach(() => {
    sampleUser = {
      id: 123,
      name: "foo",
      email: "foo@bar.com",
      save: sandbox.stub().resolves(),
    };

    findStub = sandbox.stub(mongoose.Model, "findById").resolves(sampleUser);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should check for an id", (done) => {
    users.get(null, (err, result) => {
      expect(err).to.exist;
      expect(err.message).to.equal("Invalid user id");
      done();
    });
  });
});
