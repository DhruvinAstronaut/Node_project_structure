const express = require('express');
const allview = express.Router();

allview.get('/', function(req,res){
    res.render('./admin/index')
})

module.exports = allview;