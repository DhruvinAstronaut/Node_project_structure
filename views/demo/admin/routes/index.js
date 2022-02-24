const express =require('express');
const viewRouter  = express.Router();

viewRouter.get('/', function(req,res){
    res.render('/layout/index');
})

module.exports = viewRouter;

