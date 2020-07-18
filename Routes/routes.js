const express = require("express");
const routes = express.Router();
const Controller = require("../Controller/productController.js");
const middlewareToken = require("../middleware/confirm.token.jwt.js");

routes.get("/homePageLoader",Controller.homePageLoader);
routes.post("/addProduct",middlewareToken.MiddleWare,Controller.addNewProduct);
routes.delete("/delete",middlewareToken.MiddleWare,Controller.deleteOneProduct);
routes.put("/updateProductImage",middlewareToken.MiddleWare,Controller.updateOneProductOnImage);
routes.put("/updateProductInformation",middlewareToken.MiddleWare,Controller.updateProductInformation);
routes.delete("/deleteOneImage",middlewareToken.MiddleWare,Controller.deleteOneImage);
module.exports = routes;