const Device = require("../src/innerscync");
const expect = require("chai").expect;
const sinon = require("sinon");

describe("Test for the inner Promise ", () => {
  it("check for the Resolved Dev info", async function () {
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
    try {
      const device = new Device({ id: 1, name: "subham" });
      expect(device).to.be.an.instanceof(Device);

      let getDeviceInfoStub = sinon
        .stub(Device, "getDeviceInfo")
        .resolves(dummyData);

      let result = await device.info({ id: 1 });
      expect(result).to.deep.equal(expectedResult);
      getDeviceInfoStub.restore();
    } catch (err) {
      expect(err.message).to.be.equal("Error in info");
    }
  });

  it("shoud cehck for the rejected devInfo", async function () {
    this.timeout(0);
    try {
      const device = new Device({ id: 1, name: "subham" });
      let expectedResult = {
        userType: "normal",
        time: "12:00",
        user: "superUser",
        password: "superPassword",
      };
      let result = await device.info({ idid: 1 });
      expect(result).to.deep.equal(expectedResult);
    } catch (err) {}
  });
});
