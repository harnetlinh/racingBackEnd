const database = require("../models/account.model.js");
const File = require("../log_request/get.log.req.js");
const file = new File("./log_request/jwt.req.json");
const { json } = require("body-parser");
exports.Login = async (req,res,next) =>
{
    await database.Login(req.body.account,req.body.password).
    then((token) =>  {
        res.status(200).send(token);
        file.saveRecord(req,res,"null",token);
    })
    .catch(err => {
        res.status(403).json({"Status":"Access Deny"});
        file.saveRecord(req,res,err,{"Status":"Access Deny"});
    });
}