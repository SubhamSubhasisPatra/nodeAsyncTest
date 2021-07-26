const md5 = require("../src/md5");
const expect = require("chai").expect;

describe.skip("Test MD5", () => {
  it("with string args", function (done) {
    md5("subham subhasis patra", (err, hash) => {
      if (err) return done(err);
      expect(hash)
        .to.be.a("string")
        .that.matches(/^[a-f0-9]{32}$/)
        .and.equal("c2b0c28ec22a2b074084ded2aae97c77");
      done();
    });
  });

  it("should throw an error ", (done) => {
    md5(123, (err, hash) => {
      if (err) {
        expect(() => {
          throw err;
        }).to.throw(TypeError, `Data shoud be String or array no Number`);
        done();
      }
      done();
    });
  });
});
