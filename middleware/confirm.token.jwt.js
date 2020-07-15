const vertify = require('../middleware/Vertify Object/vertify.token.js');


exports.MiddleWare = (req,res,next) =>{

    const token  = req.headers.accesstoken;
    const vertifyURl = new vertify(token,process.env.TOKEN_SECRET);
    console.log(vertifyURl.decodeTokenPayLoad);
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
            res.status(403).send({"Status":"Not Your Role"});
            else res.status(403).send({"Status":"Access Deny"});
        break;
        //
        case "/updateProductImage": 
            if(vertifyURl.getUpdateProductRole() == 1) 
            next();
            else if(vertifyURl.getUpdateProductRole() == 0)
            res.status(403).send({"Status":"Not Your Role"});
            else res.status(403).send({"Status":"Access Deny"});
        break;
        //
        case "/updateProductInformation":
            if(vertifyURl.getUpdateProductRole() == 1) 
            next();
            else if(vertifyURl.getUpdateProductRole() == 0)
            res.status(403).send({"Status":"Not Your Role"});
            else res.status(403).send({"Status":"Access Deny"});
        break;
        //
        case "/deleteOneImage":
            if(vertifyURl.getDeleteProductRole() == -1) 
            next();
            else if(vertifyURl.getDeleteProductRole() == 0)
            res.status(403).send({"Status":"Not Your Role"});
            else res.status(403).send({"Status":"Access Deny"});
        break;
        //
        case "addProduct":
            if(vertifyURl.getAddNewProductRole() == 1) 
            next();
            else if(vertifyURl.getAddNewProductRole() == 0)
            res.status(403).send({"Status":"Not Your Role"});
            else res.status(403).send({"Status":"Access Deny"});
        break;
        default:
            break;
    }
}