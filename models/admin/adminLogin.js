const mongoose = require('mongoose');


const adminloginSchema = new mongoose.Schema({
  
  email: {
      type: String,
      required:true
  },
  password:{
      type: String,
      required: true
  }

})

const AdminModel = mongoose.model('AdminModel', adminloginSchema);
module.exports = AdminModel;
