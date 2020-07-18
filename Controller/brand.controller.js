const brandManagement  = require("../models/brand.model.js");
const File = require("../log_request/get.log.req.js");
const file = new File("./log_request/bradn.req.json");
exports.addNewBrand = (req,res) =>{
    brandManagement.addNewBrandModel(req.body.brandName)
    .then(rows=>{
        res.send({"Status":"Added"});
        file.saveRecord(req,res,"null",rows)
    })
    .catch(err=>{
        res.status(403).send({"Status":"Add Field"})
        file.saveRecord(req,res,err,{"Status":"Add Field"});
    });
}
exports.getBrand = (req,res) =>{
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    brandManagement.getAllBrandModel()
    .then(rows=>{
        res.status(200).json(rows);
        file.saveRecord(req,res,"null",rows);
    })
    .catch(err=>{
        res.status(403).send({"Status":"Get Data field"});
        file.saveRecord(req,res,err,{"Status":"Get Data field"});
});
}
