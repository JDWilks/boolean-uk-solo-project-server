const prisma = require("../../utilities/database.js");

// post request to add a user

function addUser(req, res) {
  const newUser = req.body;
  console.log("newUser", newUser);
  prisma.user
    .create({ data: newUser })
    .then((newUser) => {
      res.json(newUser);
    })
    .catch((error) => {
      // res.json({ msg: error.message });
    });
}

module.exports = { addUser };
