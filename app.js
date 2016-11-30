var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
//app.use('/faqs', faqs);


app.get('/', function(req, res){
  res.render('index.ejs');
});

app.get('/FAQs', function(req, res){
  res.render('faqs.ejs');
});

app.get('/Pricing', function(req, res){
  res.render('howItWorks.ejs');
});

app.get('/KnowUs', function(req, res){
  res.render('knowUs.ejs');
});

app.get('/GoalSelection', function(req, res){
  res.render('mood.ejs');
});

app.get('/YourStory', function(req, res){
  res.render('yourStory.ejs');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
