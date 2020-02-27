var express = require('express');
var router = express.Router();

/* GET users listing. */
router
  .get('/', function(req, res, next) {
    res.json({
      'success': true,
      'data': []
    })
  })

  .post('/', function(req, res, next) {
    res.send('method POST');
  });

module.exports = router;
