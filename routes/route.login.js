const express = require('express');
const route = express.Router();
const developerLogin = require('../controllers/developerLogin');

const developerFind = require('../middlerwares/devLogin');



route.post('/postLogin',developerFind,developerLogin.postLogin);

module.exports = route;




