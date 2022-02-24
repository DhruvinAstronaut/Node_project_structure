const Developer = require('../models/schemaModel/develoeprModel');
const devloginSchema = require('../models/schemaModel/develoeprModel');
const bcrypt = require('bcrypt');
const rules = require('nodemon/lib/rules');
const jwt = require('jsonwebtoken');


module.exports = {
   
    postLogin: async (req,res) => {
        try{
                const user =  req.body.email;
                const {email,password} = await Developer.findOne({email:user})
                const checkPassword = bcrypt.compareSync(req.body.password,password)

                

                if(checkPassword){
                    const token = jwt.sign({_id: developer.id}, "Dhruvin");
                    res.header('access-token', token);
                    res.send("Login successfull")
                }else{
                    res.send("Invalide login or password")    
                }

        }catch{

                res.status(400);

        };
},





}