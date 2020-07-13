const mysql = require('mysql2')

const connect =  mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "1",
        database: "car_showroom"
    }
);

connect.connect(function(err)
{
    if (err) throw err;
    console.log("database connected");
});

module.exports = connect;