module.exports = {
  // A func that takes in two parameters `req` and `res` [request, response]
  getIndexPage: (req, res) => {
    if (req.user.isLoggedIn()) {
      return res.send("Welcome");
    }
    throw new Error("User is not authenticated");
  },
};
