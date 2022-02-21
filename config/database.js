const res = require('express/lib/response');
const mongoose = require('mongoose');
const Success = require('../responses/success.json'); 
const Error = require('../responses/error.json');


//Database connectivity 
mongoose.connect('mongodb://localhost/developer')
.then(() => console.log('Connection is establish...'))
.catch(() => console.log('Could not connect with databse .....'))
