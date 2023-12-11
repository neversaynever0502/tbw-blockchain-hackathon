const { expect } = require("chai");

describe("SimpleStorage contract", function () {
  let SimpleStorage;
  let simpleStorage;
  let owner;

  beforeEach(async function () {
    SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    [owner] = await ethers.getSigners();
    simpleStorage = await SimpleStorage.deploy();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await simpleStorage.owner()).to.equal(owner.address);
    });
  });

  describe("Storing and retrieving value", function () {
    it("Should store the value 42", async function () {
      await simpleStorage.store(42);
      expect(await simpleStorage.retrieve()).to.equal(42);
    });
  });
});
