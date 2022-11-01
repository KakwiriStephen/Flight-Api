const express = require("express");

const router = express.Router();
const controller = require("../controllers/flightController");

router.get("/", controller.example);
router.get("", controller.example);
router.post("", controller.example);
router.patch("", controller.example);

module.exports = router;