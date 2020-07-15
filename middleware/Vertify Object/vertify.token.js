const jwt = require('jsonwebtoken');
class Vertify 
{
    constructor(token,sceretKey)
    {
        this.token = token;
        this.sceretKey = sceretKey;
        let decode;
        try {
            decode = jwt.verify(this.token, this.sceretKey);
        } catch(error) {
            decode = -1;
        }
        this.decodeTokenPayLoad = decode;
    }
    getUpdateProductRole()
    {
        if(this.decodeTokenPayLoad !=-1)
        return this.decodeTokenPayLoad.updateProduct;
        else return -1;
    }
    getDeleteProductRole()
    {
        if(this.decodeTokenPayLoad!=-1)
        return this.decodeTokenPayLoad.deleteProduct;
        else return -1;
    }
    getAddNewProductRole()
    {
        if(this.decodeTokenPayLoad!=-1)
        return this.decodeTokenPayLoad.addNewProduct;
        else return -1;
    }
    isAdmin()
    {
        if(this.decodeTokenPayLoad!=-1)
        return this.decodeTokenPayLoad.admin;
        else return -1;
    }
    getDomain()
    {
        if(this.decodeTokenPayLoad!=-1)
        return this.decodeTokenPayLoad.domain;
        else return -1;
    }
}
module.exports = Vertify;