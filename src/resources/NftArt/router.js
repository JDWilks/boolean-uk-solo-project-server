const { Router } = require("express");

const {
  createNftArt,
  findOneNft,
  findAllNftArt,
  updateNftArt,
  deleteNftArt,
} = require("./controller.js");

const router = Router();

// post request to trade a nft

router.post("/", createNftArt);
router.get("/", findAllNftArt);
router.get("/:id", findOneNft);
router.patch("/:id", updateNftArt);
router.delete("/:id", deleteNftArt);

module.exports = router;
