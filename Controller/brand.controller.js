const brandManagement  = require("../models/brand.model.js");

exports.addNewBrand = (req,res) =>{
    brandManagement.addNewBrandModel(req.body.brandName)
    .then(rows=>res.send({"Status":"Added"}))
    .catch(err=>res.status(403).send({"Status":"Add Field"}));
}
exports.getBrand = (req,res) =>{
    brandManagement.getAllBrandModel()
    .then(rows=>res.json(rows))
    .catch(err=>res.status(403).send({"Status":"Get Data field"}));
}
