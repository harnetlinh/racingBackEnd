const File = require('fs');

class FileJSON
{
    constructor(jsonFilePath)
    {
        this.jsonFilePath = jsonFilePath;

    }
    saveRecord(req,res,err,data)
    {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        let date = new Date(Date.now());
        let log = {
            reqComplate: req.complete,
            headers: req.headers,
            params:req.params,
            body:req.body,
            querey:req.query,
            originalURL:req.originalUrl,
            method: req.method,
            ServerDate: date.getDate() + "/" +date.getMonth() + "/" + date.getFullYear(),
            ServerTime: date.getHours() + "h-" + date.getMinutes() + "m-" + date.getSeconds() +"s",
            ip:ip,
            resStatusCode: res.statusCode,
            resContent: data,
            err: err
        }
        File.appendFile(this.jsonFilePath,","+JSON.stringify(log),function(err)
        {
            console.log('done');
        });
    }
}
module.exports = FileJSON;