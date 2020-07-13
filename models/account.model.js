const db = require("../database/database.js");
const jwt = require('jsonwebtoken');
const sha512 = require('js-sha512');
exports.Login  = (account,password) =>
{
    return promise = new Promise((resolve, reject)=>{
        let qr = "SELECT * FROM `account` WHERE account = \'" + account + "\' and pass_ = \'" + sha512.sha512(password) + "\'";
        db.query(qr,function(err,rows,fields){
            if(err) reject(err);
            else if(rows.length==1)
            {
                let  isAdmin =  JSON.stringify(rows[0].isAdmin);
                let playLoad = {
                    "sub": "1234567890",
                    "name": rows[0].account,
                    "isAdmin": isAdmin.data,
                    "addProduct": 1,
                    "updateProduct": 12,
                    "deleteProduct": 13,
                    "jti": "95569f57-e96f-4664-acec-7bef5a98829e" //test thoi
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