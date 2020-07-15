const database = require("../models/account.model.js");
const jwt = require('jsonwebtoken');
const decodeToken = require("../middleware/Vertify Object/vertify.token.js");
const { json } = require("body-parser");
var totalAccout = 0;
exports.Login = async (req,res,next) =>
{
    let tk;
    await database.Login(req.body.account,req.body.password).then((token) =>  {res.send(token); tk = token})
    .catch(err => res.status(403).json({"Status":"Access Deny"}));
}