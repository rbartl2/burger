var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, callBack){
        connection.query("SELECT * FROM " + tableInput + ";", function(err, result){
            if(err) throw err;
            callBack(result);
        })
    },

    updateOne: function(tableInput, conditon, callBack){
        connection.query("UPDATE " + tableInput + " SET devoured=true WHERE id="+conditon+";", function(err, result){
            if(err) throw err;
            callBack(result);
        })
    },

    insertOne: function(tableInput, val, callBack){
        connection.query("INSERT INTO " +tableInput+" (burger_name) VALUES ('"+val+"');", function(err, result){
            if(err) throw err;
            callBack(result);
        })
    }
}

module.exports = orm;