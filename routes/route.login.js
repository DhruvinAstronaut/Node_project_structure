const express = require('express');
const route = express.Router();
const developerLogin = require('../controller/developerLogin');

const developerFind = require('../middlerware/devLogin');



route.post('/postLogin',developerFind,developerLogin.postLogin);

module.exports = route;




