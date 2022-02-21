const mongoose = require('mongoose');

const devloginSchema = new mongoose.Schema({
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
});

module.exports = devloginSchema;