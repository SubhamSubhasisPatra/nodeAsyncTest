const crypto = require("crypto");

module.exports = function (string, callback) {
  let withCallback = typeof callback === "function";
  try {
    let hash = crypto.createHash("md5").update(string).digest("hex");
    withCallback && callback(null, hash);
  } catch (e) {
    if (withCallback) callback(e);
    else throw e;
  }
};
