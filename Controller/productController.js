const productManagement  = require("../models/product.js");
//const { json } = require("body-parser");
//const { json } = require("body-parser");

exports.homePageLoader = (req,res) =>
{
    productManagement.getProductInTheDatabase()
    .then(rows => res.json(rows))
    .catch(err =>res.status(403).json({"Status":"Faild To Get Data"}));
}

exports.addNewProduct = (req,res) => 
{
   productManagement.addOneProductToDatabase(req.body.productName, req.body.productBrand, req.body.productPrice, 
    req.body.productColor, req.body.productTypeID, req.body.account_added, req.body.imageList)
    .then(rows => res.json({"Status":"Add Successfully"}))
    .catch(err =>res.status(403).json({"Status":"Add Field"}));
}

exports.deleteOneProduct = (req,res) =>
{
  productManagement.deleteTheProductInDatabase(req.body.productID)
  .then(rows => res.json({"Status":"Delete Successfully"}))
  .catch(err => res.status(403).json({"Status":"Delete Field"}));
}

exports.updateProductInformation = (req,res) =>
{
  productManagement.updateTheProductInformationModel(req.body)
  .then(rows => res.json({"Status":"Update Successfully"}))
  .catch(err =>res.status(403).json({"Status":"Update Field Information"}));
}

exports.updateOneProductOnImage = (req,res) =>
{
  productManagement.updateProductOnImage(req.body)
  .then(() => res.json({"Status":"Update Successfully"}))
  .catch(listIDFieldToUpdate => res.status(403).json(JSON.stringify(listIDFieldToUpdate)));
}

exports.deleteOneImage = (req,res) =>
{
    productManagement.deleteOneImageOfProduct(req.body.imgID)
    .then(rows => res.json({"Status":"Delete Successfull"}))
    .catch(err => res.status(403).json({"Status":"Delete Field"}));
}