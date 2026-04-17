const express = require("express");
const { cars } = require("../data/cars");

const router = express.Router();

router.get("/", (req, res) => {
      res.json({
            success: true,
            data: cars
      });
});

module.exports = router;