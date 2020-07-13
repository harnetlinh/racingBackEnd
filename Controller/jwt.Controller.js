const database = require("../models/account.model.js");
const jwt = require('jsonwebtoken');
const { json } = require("body-parser");
exports.Login = async (req,res) =>
{
    let tk;
    await database.Login(req.body.account,req.body.password).then((token) => tk = token)
    .catch(err => res.json({"Status":"Access Deny"}));

    let alg  = {
        "algorithm": "HS512"
       };
    jwt.verify(tk,process.env.TOKEN_SECRET, alg,function(err,decode){
        if(err) throw err;
        else
        console.log(decode);
    });
    res.send(tk);
}