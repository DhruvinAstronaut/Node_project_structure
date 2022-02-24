const mongoose = require('mongoose');
const developerSchema = require('../schema/developerSchema');
const adminmodel = require('../admin/adminLogin');

Developer = mongoose.model('Developer', developerSchema)
AdminLogin = mongoose.model('AdminLogin', adminmodel);



module.exports = Developer, AdminLogin