var express = require('express');
var router = express.Router();
var categoryController = require('../src/api/controllers/categoryController');

/* GET users listing. */
router
  .get('/', categoryController.show)
  .post('/', categoryController.create);

module.exports = router;