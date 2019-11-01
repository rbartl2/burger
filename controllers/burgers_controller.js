var express = require("express");
var router = express.Router();

// Base route
router.get('/', function(req, res){
    res.render('index');
})

module.exports = router;