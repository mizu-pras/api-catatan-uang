var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// router
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/categories');

var app = express();
var router = express.Router();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
router.use('/gettoken', usersRouter);
router.use('/categories', categoryRouter);

// router API
app.use('/api/v1', router);

module.exports = app;
