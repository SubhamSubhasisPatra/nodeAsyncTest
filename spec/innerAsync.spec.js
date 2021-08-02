const Device = require("../src/innerscync");
const expect = require("chai").expect;
const sinon = require("sinon");

describe("Test for the inner Promise ", () => {
  it("check for the instance", async function () {
    this.timeout(0);
    let dummyData = {
      userType: "normal",
      time: "12:00",
    };
    let expectedResult = {
      userType: "normal",
      time: "12:00",
      user: "superUser",
      password: "superPassword",
    };
    const device = new Device({ id: 1, name: "subham" });
    expect(device).to.be.an.instanceof(Device);

    let getDeviceInfoStub = sinon
      .stub(Device, "getDeviceInfo")
      .resolves(dummyData);

    let result = await device.info({ id: 1 });
    expect(result).to.deep.equal(expectedResult);
    getDeviceInfoStub.restore();
  });
});
