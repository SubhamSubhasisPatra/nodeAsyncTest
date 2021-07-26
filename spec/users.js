const mongoose = require("mongoose");
const User = require("../src/user");

exports.get = function (id, callback) {
  if (!id) {
    return callback(new Error("Invalid user id"));
  }

  User.findById(id, function (err, result) {
    if (err) {
      return callback(err);
    }

    return callback(null, result);
  });
};
