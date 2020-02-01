const express = require('express');
const router = express.Router();
const PagesController=require('../controllers/PagesController')
const P1=require('../controllers/PagesController')
//const AppliactionsController=require('../controllers/AppliactionsController')

router.get('/',PagesController.home);
//router.post('/applications', P1.getPosts);
module.exports = router;
