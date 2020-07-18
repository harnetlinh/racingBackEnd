const router = require('express').Router();
const controller = require("../Controller/404.controller.js");

router.use(controller.PageNotBeFound);

module.exports = router;