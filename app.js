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


var mood = [
	{ name: 'Broke'},
	{ name: 'Nerdy'},
	{ name: 'Rich'},
	{ name: 'Responsible'},
	{ name: 'Loved'},
	{ name: 'Social'}
];


app.get('/', function(req, res){
	

	
  res.render('index.ejs',{
	  
	  selectorDisplay: "hide",
	  	loggedIn: "hide",
	  		hideLoginModal: "show",
	  footerDisplay: "show",
	  footerData1: "Blog",
	  footerData2: "FAQs",
	  moods: mood
	  
  });
});

app.get('/FAQs', function(req, res){
  res.render('faqs.ejs',{
	  
	  selectorDisplay: "show",
	  	loggedIn: "hide",
	  		hideLoginModal: "show",
	  	  footerDisplay: "show",
	  footerData1: "Blog",
	  footerData2: "FAQs"
	  
  });
});

app.get('/Pricing', function(req, res){
  res.render('howItWorks.ejs', {
	  
	  	  selectorDisplay: "show",
	  	loggedIn: "hide",
	  		hideLoginModal: "show",
	  	  footerDisplay: "show",
	  footerData1: "Video Tour",
	  footerData2: "FAQs"
  });
});

app.get('/KnowUs', function(req, res){
  res.render('knowUs.ejs',{
	  
	  selectorDisplay: "show",
	  	loggedIn: "hide",
	  		hideLoginModal: "show",
	  	  footerDisplay: "show",
	  footerData1: "Blog",
	  footerData2: "FAQs"
	  
	  
  });
});

app.get('/GoalSelection', function(req, res){
  res.render('mood.ejs',{
	  
	  	  selectorDisplay: "show",
	  	loggedIn: "hide",
	  		hideLoginModal: "show",
	  	  footerDisplay: "hide",
	  footerData1: "Blog",
	  footerData2: "FAQs"
  });
});

app.get('/YourStory', function(req, res){
  res.render('yourStory.ejs',{
	  
	  
	  	  selectorDisplay: "show",
	  		loggedIn: "show",
	  path:'profileData',
	  		hideLoginModal: "hide",
	  	  footerDisplay: "hide",
	  footerData1: "Blog",
	  footerData2: "FAQs"
  });
});

app.get('/profile', function(req, res){
  res.render('yourStory.ejs',{
	  
	  
	  	  selectorDisplay: "show",
	  		loggedIn: "hide",
	  	path:'profileData',
	  		hideLoginModal: "hide",
	  	  footerDisplay: "hide",
	  footerData1: "Blog",
	  footerData2: "FAQs"
  });
});

app.get('/myStory', function(req, res){
  res.render('yourStory.ejs',{
	  
	  
	  	  selectorDisplay: "show",
	  		loggedIn: "show",
	  path:'myStoryData',
	  		hideLoginModal: "hide",
	  	  footerDisplay: "hide",
	  footerData1: "Blog",
	  footerData2: "FAQs"
  });
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
