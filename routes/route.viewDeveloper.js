const express =require('express');
const router  = express.Router();
const viewDeveloper = require('../controllers/developer_view');
const { route } = require('./route.developer');

router.get('/viewDev', viewDeveloper.view_User);


module.exports = router;