class Device {
  constructor(devInfo) {
    let self = this;
    self.id = devInfo.id;
    self.name = devInfo.name;
  }

  info(devDetails) {
    return new Promise((resolve, reject) => {
      Device.getDeviceInfo(devDetails.id)
        .then((data) => {
          resolve(
            Object.assign(data, {
              user: "superUser",
              password: "superPassword",
            })
          );
        })
        .catch(function (err) {
          reject(err);
        });
    });
  }

  static getDeviceInfo(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          userType: "normal",
          time: "12:00",
        });
      }, 5000);
    });
  }
}

module.exports = Device;
