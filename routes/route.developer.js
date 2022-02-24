const express =require('express');
// const developer = require('../controller/developer');
const router  = express.Router();
const develoeprRoutes = require('../controllers/developer');
const pass_check = require('../middlerwares/developerMiddleware');
const emptyDataSet = require('../middlerwares/developerMiddleware');

router.post('/postDeveloper',pass_check.pass_check_and_hash,develoeprRoutes.postDeveloper);
router.get('/getDevelopers',develoeprRoutes.getDeveloepr);
router.delete('/deleteDeveloper/:id',develoeprRoutes.deleteDeveloeprById);
router.delete('/deleteDevelopers',develoeprRoutes.deleteDeveloeprs);



module.exports = router;