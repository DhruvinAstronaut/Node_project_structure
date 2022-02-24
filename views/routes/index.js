const express = require('express');
const { throttle } = require('lodash');
const viewRouter = express.Router();
const Developer   =  require('../../models/schemaModel/develoeprModel');
const verifyAdmin = require('../../middlerwares/adminLoginMiddleware');
const AdminModel = require('../../models/admin/adminLogin');
const developerSchema = require('../../models/schema/developerSchema');
const session = require('express-session');



viewRouter.get('/', function(req,res){
    if(req.session.admin){
        res.render('index');
    } else
    res.render('login', {message:""});
})

viewRouter.post('/login', async function(req,res){
    
    console.log(req.body.email)
  
     const admin = await  AdminModel.findOne({email: req.body.email})
   
     if(!admin){
        //  res.render('index')
         res.send("email not found").status(200);

     }
 
    if(req.body.password == admin.password){

        req.session.admin = true;
        res.render('index')
    }else{
        res.render('login',{err_msg : "invalid email/password "})
        // res.send("emailid / password invalide")
        
    }

})

viewRouter.get('/', verifyAdmin, function(req,res){

    res.render('index')
})

viewRouter.get('/form', verifyAdmin, async function(req,res){
    const id = req.query.id;
    const user = await Developer.findById(id);
    console.log(id);
    res.render('editform', {user : user})
})

viewRouter.post('/updateData',verifyAdmin,async function(req,res){
    try {
        const student = await Developer.findByIdAndUpdate(req.query.id,req.body,{new: true})
        res.redirect('table');
    } catch (error) {
        res.send("Error",error.message)
        
    }
})

viewRouter.all('/logout', verifyAdmin, async function(req,res){
    if (req.session.admin) {
        req.session.destroy();
         res.redirect('/');
    }
})

viewRouter.get('/count', verifyAdmin, async function(req,res){
    
        const number = await Developer.countDocuments();
        console.log(number)
        res.render('index', {Number: number})

 
})

viewRouter.get('/delete', verifyAdmin, async function (req,res){
  
    //Logic to delete the item
    const student = await Developer.findOneAndRemove(req.query.id)
    res.redirect('table');

})


viewRouter.get('/table', verifyAdmin, function(req,res){
    var developerData = Developer.find();
    developerData.exec(function(err,data){
        if(err) throw err;
        res.render('table', {records: data})
        
        
    })
})

module.exports = viewRouter;