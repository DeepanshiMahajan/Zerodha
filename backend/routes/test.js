const express = require("express");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", auth, (req, res) => {
  res.json("Protected data accessed");
});

module.exports = router;
