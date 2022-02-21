const mongoose = require('mongoose');
const developerSchema = require('../schema/developerSchema');
const devloginSchema = require('../schema/develoginSchema.js');

Developer = mongoose.model('Developer', developerSchema)
DeveloperLogin = mongoose.model('DeveloperLogin', devloginSchema)

module.exports = Developer, DeveloperLogin









