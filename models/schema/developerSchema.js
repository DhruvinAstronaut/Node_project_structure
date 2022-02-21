const mongoose = require('mongoose');
// const valid = require('validator');

const developerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        min: 2,
        max: 20
    },
    last_name: {
        type: String,
        required: true,
        min: 2,
        max: 20
    },
    age: {
        type: Number,
        required: true
    },
    prog_lang: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // validate: {
        //     validator: (value) => {
        //         return isEmail(value)
        //     },
        //     message: "Email is invalid"
        // }  
    },
    password: {
        type: String,
        required: true
    },
    password_ReEnter: {
        type: String,
        required: true
    },
    Developer_Entry:{
        type: Date,
        default: new Date()
    }
    
});

module.exports = developerSchema;