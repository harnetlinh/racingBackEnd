const express = require('express');
const router = express.Router();
const Controller = require("../Controller/cartController.js");
router.put("/createCart",Controller.createCart);

module.exports = router; 