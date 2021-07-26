const PromiseMd5 = require("../src/promise-md5");
const expect = require("chai").expect;

describe.skip("Check the Promise Fn", () => {
  it("Check the input String", async () => {
    // return PromiseMd5("subham subhasis patra")
    //     .then((hash)=>{
    //         expect(hash).to.be.a("string")
    //         .that.matches(/^[a-f0-9]{32}$/)
    //         .and.equal("c2b0c28ec22a2b074084ded2aae97c77")
    //     })

    let resHahs = await PromiseMd5("subham subhasis patra");
    expect(resHahs)
      .to.be.a("string")
      .that.matches(/^[a-f0-9]{32}$/)
      .and.equal("c2b0c28ec22a2b074084ded2aae97c77");
  });

  it("Should throw an error", async () => {
    // return PromiseMd5(123)
    //     .then()
    //     .catch((err) =>{
    //         expect(()=>{throw err}).to.equal(TypeError,"Invalid Input")
    //     })

    try {
      let err = await PromiseMd5(123);
    } catch (err) {
      expect(() => {
        throw err;
      }).to.equal(TypeError, "Invalid Input");
    }
  });
});

describe("TEST HOOKS", () => {
  // beforeEach(()=>{

  // })
  it("should check the getter and setter", () => {});
});
