const recordLog = require("../log_request/get.log.req.js");
exports.PageNotBeFound =  (req,res) =>{

    res.status(404).send("Page Not Be Found");
    const rc = new recordLog("./log_request/other.req.json");
    rc.saveRecord(req,res,"null","Page Not Be Found");
}   