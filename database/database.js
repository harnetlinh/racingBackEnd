const mysql = require('mysql2')

const connect =  mysql.createConnection(
    {
        host: "localhost",
        user: "root",//"root",
        password: "1",//"1",
        database: "car_showroom"
    }
);
// protected $servername ="localhost";
// protected $username="id13801141_root";
// protected $password="0sGG7?(C8EQIx7sZ";
// protected $dbname = "id13801141_nhatro";
connect.connect(function(err)
{
    if (err) throw err;
    console.log("database connected");
});

module.exports = connect;