const database = require("../database/database.js");
 //INSERT INTO `brand`(`brandID`, `brandName`) VALUES ([value-1],[value-2])
exports.addNewBrandModel = (brandName) => {

    return promise = new Promise((resolve, reject)=>{
        let qr = "INSERT INTO `brand`(`brandName`) VALUES (\'"+ brandName+ "\')";
        database.query(qr,function(err,rows){
            if(err) reject(err);
            else 
            resolve(rows);
        });
    })
}

exports.getAllBrandModel = () =>{
    return promise = new Promise((resolve,reject)=>{
        let qr ="select * from brand";
        database.query(qr,function(err,rows){
            if(err) reject(err);
            else 
            resolve(rows);
        })
    });
}