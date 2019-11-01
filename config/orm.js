var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, callBack){
        connection.query("SELECT * FROM " + tableInput + ";", function(err, result){
            if(err) throw err;
            callBack(result);
        })
    }
}

module.exports = orm;