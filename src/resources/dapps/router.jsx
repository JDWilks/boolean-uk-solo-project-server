const { Router } = require("express");

const { getAll } = require("./controller");

const router = Router();

// The second argument (a function) is the controller

router.get("/", getAll);

// router.post("/", createOne);

// router.patch()

// router.delete()

module.exports = router;
