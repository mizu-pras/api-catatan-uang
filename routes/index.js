var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    success: true,
    message: "Welcome to miyarsa API"
  })
});

module.exports = router;
