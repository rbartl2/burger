var orm = require("../config/orm.js");

var burger = {
    all: function(callBack){
        orm.selectAll("burgers", function(res){
            callBack(res);
        })
    }
}

module.exports = burger;