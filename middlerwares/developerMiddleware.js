const Success = require('../responses/success.json');
const Error = require('../responses/error.json');
const Developer = require('../models/schemaModel/develoeprModel');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');


module.exports = {

    pass_check_and_hash: async (req, res, next) => {
        if (req.body.password != req.body.password_ReEnter) {
            res.send(Error.PASS_ERR);
            return;
        };
        const email = req.body.email;
        //  if(!body('email').isEmail){
        //      res.send("email must be email")
        //  }
        console.log()
        

        next();
    }


}
