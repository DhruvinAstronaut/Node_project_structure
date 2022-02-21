const _ = require('lodash');
const Developer = require('../models/schemaModel/develoeprModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Hashing = require('../helpers/hash');
const { body, validationResult } = require('express-validator');



module.exports = {

    // Register the Developer
    postDeveloper: async (req, res) => {

        try {

            const developer = new Developer(req.body);
            // Hash both password

            const rr = body('email');
            console.log(rr);

            const salt = await bcrypt.genSalt(10);
            developer.password = await Hashing.hash_field(developer.password, salt);
            developer.password_ReEnter = await Hashing.hash_field(developer.password_ReEnter, salt);

         
            // res.send(token)
            console.log(token);
   
                  
            const result = await developer.save();
            res.send(result).status(200);

        } catch (error) {
            res.send(error.message).status(400);

        };
    },
    // Get all Develoepr profiles
    getDeveloepr: async (req, res) => {
        try {
            const result = await Developer.find();
            res.status(200).send(result);

        } catch {
            res.status(400);
        };
    },

    // Delete developer using ID
    deleteDeveloeprById: async (req, res) => {
        const result = await Developer.findOneAndDelete({ id: req.body.id });
        res.status(200).send(result);
    },

    // Delete all Develoeprs - clean whole database;
    deleteDeveloeprs: async (req, res) => {
        const result = await Developer.deleteMany()
        res.status(200).send(result);
    }
};
