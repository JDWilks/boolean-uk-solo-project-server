const prisma = require("../../utilities/database");

function createNftArt(req, res) {
  const newNft = req.body;
  console.log(req, newNft);
  prisma.nftArt
    .create({
      data: {
        ...newNft,
        price: parseFloat(newNft.price),
      },
    })
    .then((newNft) => {
      console.log("newNft", newNft);
      res.json(newNft);
    })
    .catch((error) => {
      res.json(error);
    });
}

//

function findAllNftArt(req, res) {
  prisma.nftArt.findMany().then((allNfts) => res.json(allNfts));
}

function findOneNft(req, res) {
  const id = parseInt(req.params.id);
  prisma.nftArt
    .findUnique({
      where: {
        id: id,
      },
    })
    .then((art) => {
      res.json(art);
    })
    .catch((error) => {
      res.json({ msg: "...your get one backend blew up" });
    });
}

function updateNftArt(req, res) {
  const updatedNft = req.body;
  const id = parseInt(req.params.id);
  console.log(updatedNft);
  prisma.nftArt
    .update({
      where: { id: id },
      data: {
        ...updatedNft,
        price: updatedNft.price ? parseFloat(updatedNft.price) : 0.0,
      },
    })
    .then((updatedNft) => {
      res.json({ updatedNft });
    })
    .catch((error) => {
      res.json({ msg: "...your amendNft backend blew up" });
    });
}

function deleteNftArt(req, res) {
  const id = parseInt(req.params.id);
  prisma.nftArt
    .delete({
      where: { id: id },
    })
    .then((user) => res.json({ msg: `you deleted meeeee @ id no ${id}` }));
}

module.exports = {
  createNftArt,
  findAllNftArt,
  updateNftArt,
  deleteNftArt,
  findOneNft,
};

//
