const expect = require("chai").expect;
const sinon = require("sinon");
const request = require("request");
const middleware = require("../src/middleware");
const pubsub = require("pubsub-js");

describe("With mock : getPhotosByAlbumId", () => {
  it("should getPhotosByAlbumId", (done) => {
    let requestMock = sinon.mock(request);
    const myPhotos = [
      {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        albumId: 1,
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796",
      },
      {
        albumId: 1,
        id: 3,
        title: "officia porro iure quia iusto qui ipsa ut modi",
        url: "https://via.placeholder.com/600/24f355",
        thumbnailUrl: "https://via.placeholder.com/150/24f355",
      },
    ];

    requestMock
      .expects("get")
      .once()
      .withArgs("https://jsonplaceholder.typicode.com/albums/2/photos?_limit=3")
      .yields(null, null, JSON.stringify(myPhotos));

    middleware.getAlbumById(2).then((photos) => {
      expect(photos).to.deep.equal(myPhotos);
      requestMock.verify();
      requestMock.restore();
      done();
    });
  });
  context("Check With Pubsum-js", () => {
    it("Shoud Call all the subscribers when exception", () => {
      let myApi = {
        greetUser: (msg, data) => {
          console.log(msg);
        },
      };

      // add the obj that you want to mock
      const mock = sinon.mock(myApi);
      mock.expects("greetUser").once().withArgs("hey Subham", null);

      pubsub.subscribe("hey Subham", myApi.greetUser);
      pubsub.publishSync("hey Subham", null);

      mock.verify();
      mock.restore();
    });
  });
});
