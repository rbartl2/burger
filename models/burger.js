var orm = require("../config/orm.js");

// Calling selectAll, insert burgers as table input
var burger = {
    all: function(callBack){
        orm.selectAll("burgers", function(res){
            callBack(res);
        })
    },

    update: function(id, callBack){
        orm.updateOne("burgers", id, callBack);
    },

    insert: function(name, callBack){
        orm.insertOne("burgers", name, callBack);
    }
}

module.exports = burger;