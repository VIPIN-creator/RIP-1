var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var execRouter = require('./routes/execRouter');
var execTest = require('./routes/execTest');
var loginRouter = require('./routes/loginRouter');
var sessionRouter = require('./routes/sessionRouter');
var quesRouter = require('./routes/quesRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/exec', execRouter);
app.use('/api/exec/test', execTest);
app.use('/api/users', usersRouter);
app.use('/api/users/login', loginRouter);
app.use('/api/users/login', loginRouter);
app.use('/api/session', sessionRouter);
app.use('/api/question', quesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const PORT = 4000;

// connect to db
var server;
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1",{useNewUrlParser: true, useUnifiedTopology: true})
        .catch(e => console.log('error in conneting to db ', e));

module.exports = app;
