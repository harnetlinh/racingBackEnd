const vertify = require('../middleware/Vertify Object/vertify.token.js');
const File = require("../log_request/get.log.req.js");
const file = new File("./log_request/middleware.blocl.req.json");
exports.MiddleWare = (req,res,next) =>{
    const token  = req.headers.accesstoken;
    const vertifyURl = new vertify(token,process.env.TOKEN_SECRET);
    switch (req.originalUrl) {
        case "/homePageLoader": 
            next();
            break;
        case "/login": 
            next();
            break;
        //
        case "/addNewBrand": 
            next();
        break;
        //
        case "/getBrand": 
            next();
        break;
        //
        case "/createCart": 
            next();
        break;
        //
        case "/homePageLoader": 
            next();
        break;
        //
        case "/delete": 
            if(vertifyURl.getDeleteProductRole() == 1)
            next();
            else if(vertifyURl.getDeleteProductRole() == 0)
            {
                res.status(403).send({"Status":"Not Your Role"});
                file.saveRecord(req,res,"Token Invalid",{"Status":"Not Your Role"});
            }
            else {
                res.status(403).send({"Status":"Access Deny"});
                file.saveRecord(req,res,"Token Invalid",{"Status":"Access Deny"});
            }
        break;
        //
        case "/updateProductImage": 
            if(vertifyURl.getUpdateProductRole() == 1) 
            next();
            else if(vertifyURl.getUpdateProductRole() == 0)
            {
                res.status(403).send({"Status":"Not Your Role"});
                file.saveRecord(req,res,"Token Invalid",{"Status":"Not Your Role"});
            }
            else {
                res.status(403).send({"Status":"Access Deny"});
                file.saveRecord(req,res,"Token Invalid",{"Status":"Access Deny"});
            }
        break;
        //
        case "/updateProductInformation":
            if(vertifyURl.getUpdateProductRole() == 1) 
            next();
            else if(vertifyURl.getUpdateProductRole() == 0)
            {
                res.status(403).send({"Status":"Not Your Role"});
                file.saveRecord(req,res,"Token Invalid",{"Status":"Not Your Role"});
            }
            else {
                res.status(403).send({"Status":"Access Deny"});
                file.saveRecord(req,res,"Token Invalid",{"Status":"Access Deny"});
            }
        break;
        //
        case "/deleteOneImage":
            if(vertifyURl.getDeleteProductRole() == 1) 
            next();
            else if(vertifyURl.getDeleteProductRole() == 0)
            {
                res.status(403).send({"Status":"Not Your Role"});
                file.saveRecord(req,res,"Token Invalid",{"Status":"Not Your Role"});
            }
            else {
                res.status(403).send({"Status":"Access Deny"});
                file.saveRecord(req,res,"Token Invalid",{"Status":"Access Deny"});
            }
        break;
        //
        case "/addProduct":
            if(vertifyURl.getAddNewProductRole() == 1) 
            next();
            else if(vertifyURl.getAddNewProductRole() == 0)
            {
                res.status(403).send({"Status":"Not Your Role"});
                file.saveRecord(req,res,"Token Invalid",{"Status":"Not Your Role"});
            }
            else {
                res.status(403).send({"Status":"Access Deny"});
                file.saveRecord(req,res,"Token Invalid",{"Status":"Access Deny"});
            }
        break;
        default:
            break;
    }
}