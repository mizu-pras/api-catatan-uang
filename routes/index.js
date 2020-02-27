var express = require('express');
var router = express.Router();
var homeController = require('../src/api/controllers/homeController');

router.get('/', homeController.get);

module.exports = router;
