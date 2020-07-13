const database = require("../database/database.js");

exports.getProductInTheDatabase = async () =>
{
    return promise = new Promise((resolve, reject) => {
        let qr = "SELECT product.productID, product.productName, brand.brandName, product.productPrice, product.productColor,cartype.typeName, imagecar.image_ " +
        "FROM product " +
        "INNER JOIN cartype on product.productTypeID = cartype.typeID " +
        "INNER JOIN imagecar on imagecar.productID = product.productID " +
        "INNER JOIN brand on brand.brandID = product.productBrand " +
        "GROUP BY (imagecar.productID)";
        database.query(qr,function(err,rows,fields){
            console.log(qr);
            if(err) reject(err);
            else resolve(rows);
            });
        });
}

exports.addOneProductToDatabase = (productName, productBrand, productPrice, productColor, productTypeID, account_added, imageList) =>
{   
    return promise = new Promise((resolve,reject) =>
    {
        let Status = "Add field";
        database.query("INSERT INTO `product`(`productName`, `productBrand`, `productPrice`, `productColor`, `productTypeID`, `account_added`) VALUES (?,?,?,?,?,'admin')",
        [productName, productBrand, productPrice, productColor, productTypeID],
        function(err,rows,fields)
        {
            if(err) reject(err);
            else 
            {
                let qr = "INSERT INTO `imagecar`(`productID`, `image_`) VALUES (LAST_INSERT_ID(),\'" + imageList[0] + "\')";
                for(let i = 1; i < imageList.length; i++)
                {
                    qr += "," + "(LAST_INSERT_ID(),\'" + imageList[i] + "\')";
                }
                database.query(qr,function(err,rows,fields){
                    if (err) throw err;
                    else resolve(rows);
                });
            }
        });
    });
}

exports.deleteTheProductInDatabase = (productID) =>
{
    return promise = new Promise((resolve, reject) => 
    {  
        let qr = "delete from product where productID = " + productID;
        database.query(qr,function(err,rows,fields)
        {
            if(err) reject(err);
            else if(rows.affectedRows >= 1) {
                resolve(rows);
            }
            else reject(err);
        });
    });
}

exports.updateTheProductInformationModel = (product) =>
{
    let a = 0;
    return promise = new Promise((resolve,reject)=>
    {
        if(product.productBrand != null && product.productBrand != "" 
        && product.productName != null && product.productName != "" 
        && product.productPrice != null && product.productPrice !=""
        && product.productTypeID != null && product.productTypeID != ""
        && product.productColor != null && product.productColor != ""
        && product.account_added != null && product.account_added != ""
        && product.productID != null && product.productID != ""
        )
        {
            let qr = "UPDATE `product` SET " +
            "`productName`= \'" + product.productName + "\'," +
            "`productBrand`=" + product.productBrand + "," +
            "`productPrice`=\'" + product.productPrice + "\'," +
            "`productColor`=\'" + product.productColor + "\'," +
            "`productTypeID`=" + product.productTypeID + "," +
            "`account_added`=\'" + product.account_added + "\'" +
            " WHERE productID = " +product.productID;
            database.query(qr,function(err,rows,fields)
            {
                console.log(a);//0
                    if(err) reject(err);
                    else if(rows.affectedRows >=1) resolve(rows)
                    else reject(err);
            });
       }
       else reject(0);
       console.log(a+1);
    });
}

exports.updateProductOnImage = async (imageList) =>
{
    return promise = await new Promise((resolve,reject)=>
    {
        let countResult = 0;
        let listIDFieldToUpdate = [];
        for(let i = 0; i<imageList.length; i++)
        {
            let qr = "UPDATE `imagecar` SET `image_`= \'" + imageList[i].image_ + "\' WHERE imgID = " + imageList[i].imgID;
            database.query(qr,function(err,rows,fields)
            {
                if(rows.affectedRows == 1) countResult++;
                else {
                    listIDFieldToUpdate.push(imageList[i].imgID);
                }
                if(countResult==imageList.length) resolve(1);
                else if(i==imageList.length-1 && countResult < imageList.length) reject(listIDFieldToUpdate);
            });
        }
    });
}

exports.deleteOneImageOfProduct = (imgID) =>
{
    return promise = new Promise((resolve,reject)=>
    {
        let qr = "DELETE FROM `imagecar` WHERE `imagecar`.`imgID` = " + imgID;
        database.query(qr,function(err,rows)
        {
            if(err) reject(err);
            else if(rows.affectedRows == 1) {
                resolve(rows);
            }
            else reject(err);
        });
    });
}
