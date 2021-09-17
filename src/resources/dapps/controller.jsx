import prisma from "../../../utilities/database";

const getAll = async (req, res) => {
  try {
    const dapps = await prisma.dapps.findMany({});
    res.json({ data: dapps });
  } catch (error) {
    console.log("[ERROR]:", error);
    res.status(500).json({ error });
  }
};

// do i need a create to populate the database with api data ?
// to get data from api need seed file create many

module.exports = {
  getAll,
};
