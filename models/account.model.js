const db = require("../database/database.js");
const jwt = require('jsonwebtoken');
const sha512 = require('js-sha512');
exports.Login  = (account,password) =>
{
    return promise = new Promise((resolve, reject)=>{
        let qr = "SELECT account.account,account.isAdmin,rulesdetail.rulesID,rules.ruleName FROM `account`"+ 
        " INNER JOIN rulesdetail on rulesdetail.account = account.account" +
        " INNER JOIN rules on rules.ruleID = rulesdetail.rulesID "+
        " WHERE account.account = \'" + account + "\' and account.pass_ = \'" + sha512.sha512(password) + "\'";
        db.query(qr,function(err,rows,fields){
            if(err) reject(err);
            else if(rows.length>=1)
            {
                let addNewProductRole = 0, updateProductRole = 0,deleteProductRole = 0;
                for(let i =0;i<rows.length;i++)
                {
                    if(rows[i].rulesID==1) addNewProductRole = 1;
                    if(rows[i].rulesID==2) updateProductRole = 1;
                    if(rows[i].rulesID==3) deleteProductRole = 1;
                }
                let playLoad = {
                    "domain": "abc.com",
                    "id": rows[0].account,
                    "admin": rows[0].isAdmin,
                    "jti": sha512(rows[0].account),
                    "iat": Math.floor(Date.now() / 1000),
                    "exp": Math.floor(Date.now() / 1000) + (60*3),
                    "addNewProduct": addNewProductRole,
                    "updateProduct": updateProductRole,
                    "deleteProduct": deleteProductRole,
                };
                let alg  = {
                    "algorithm": "HS512"
                   };
                let token = jwt.sign(JSON.stringify(playLoad),process.env.TOKEN_SECRET,alg);
                resolve(token);
            }
            else reject(err);
        });
    });
}