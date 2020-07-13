const express = require('express');
const jwtRouter = express.Router();
const Controller = require("../Controller/jwt.Controller.js");

jwtRouter.post("/login",Controller.Login);

module.exports = jwtRouter;
