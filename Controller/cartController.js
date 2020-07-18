const database = require("../models/cartModel.js");
const recordLog = require("../log_request/get.log.req.js");
const rc = new recordLog("./log_request/cart.req.json");
exports.createCart = (req,res) => {
    res.json({"Cart":"Product"});
}