const mongoose = require('mongoose');
const developerSchema = require('../schema/developerSchema');

Developer = mongoose.model('Developer', developerSchema)


module.exports = Developer









