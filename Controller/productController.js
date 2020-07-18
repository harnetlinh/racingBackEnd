const productManagement  = require("../models/product.js");
const File = require("../log_request/get.log.req.js");
const file = new File("./log_request/product.req.json");

exports.homePageLoader = (req,res) =>
{
    productManagement.getProductInTheDatabase()
    .then(rows => {
      res.status(200).json(rows);
      file.saveRecord(req,res,"null",rows);
    })
    .catch(err =>{
      res.status(403).json({"Status":"Faild To Get Data"});
      file.saveRecord(req,res,err,{"Status":"Faild To Get Data"});
    });
}

exports.addNewProduct = (req,res) => 
{
   productManagement.addOneProductToDatabase(req.body.productName, req.body.productBrand, req.body.productPrice, 
    req.body.productColor, req.body.productTypeID, req.body.account_added, req.body.imageList)
    .then(rows => {
      res.status(200).json({"Status":"Add Successfully"});
      file.saveRecord(req,res,"null",rows);
  })
    .catch(err =>{
      res.status(403).json({"Status":"Add Field"});
      file.saveRecord(req,res,err,{"Status":"Add Field"});
    });
}

exports.deleteOneProduct = (req,res) =>
{
  productManagement.deleteTheProductInDatabase(req.body.productID)
  .then(rows => {
    res.status(200).json({"Status":"Delete Successfully"})
    file.saveRecord(req,res,"null",rows);
})
  .catch(err => {
    res.status(403).json({"Status":"Delete Field"})
    file.saveRecord(req,res,err,{"Status":"Delete Field"});
  });
}

exports.updateProductInformation = (req,res) =>
{
  productManagement.updateTheProductInformationModel(req.body)
  .then(rows => {
    res.status(200).json({"Status":"Update Successfully"});
    file.saveRecord(req,res,"null",rows);
})
  .catch(err =>{
    res.status(403).json({"Status":"Update Field Information"});
    file.saveRecord(req,res,err,{"Status":"Update Field Information"});
  });
}

exports.updateOneProductOnImage = (req,res) =>
{
  productManagement.updateProductOnImage(req.body)
  .then(() => {
    res.status(200).json({"Status":"Update Successfully"});
    file.saveRecord(req,res,"null",{"Status":"Update Successfully"});
})
  .catch(listIDFieldToUpdate => {
    res.status(403).json(JSON.stringify(listIDFieldToUpdate));
    file.saveRecord(req,res,"Can not Update Image",listIDFieldToUpdate);
  });
}

exports.deleteOneImage = (req,res) =>
{
    productManagement.deleteOneImageOfProduct(req.body.imgID)
    .then(rows => {
      res.status(200).json({"Status":"Delete Successfull"});
      file.saveRecord(req,res,"null",rows);
  })
    .catch(err => {
      res.status(403).json({"Status":"Delete Field"});
      file.saveRecord(req,res,err,{"Status":"Delete Field"});
  });
}

