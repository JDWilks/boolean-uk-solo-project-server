const prisma = require("../../utilities/database.js");

// post request to buy nft

function tradeNft(req, res) {
  const tradeNftArt = req.body;
  console.log("tradeNftArt", tradeNftArt);
  prisma.trade
    .create({ data: tradeNftArt })
    .then((data) => {
      console.log(data);
      res.json({ data });
    })
    .catch((error) => {
      console.log(error);
      res.json({ msg: "...your buy nft just blew up" });
    });
}

function getNft(req, res) {
  prisma.trade
    .findMany({
      include: {
        user: true,
        nft: true,
      },
    })
    .then((allTrades) => res.json(allTrades));
}

module.exports = { tradeNft, getNft };

//
