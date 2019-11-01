var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "number41",
    database: "burgers_db"
})

// Create mysql connection
connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id: " + connection.threadId)
});

// Export connection to orm
module.exports = connection;