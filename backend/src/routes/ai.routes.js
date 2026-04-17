const express = require("express");
const { processQuery } = require("../controllers/ai.controller");

const router = express.Router();

router.post("/interpret", processQuery);

module.exports = router;