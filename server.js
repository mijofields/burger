var express = require ('express');
var methodoverride = require('method-override');
var bodyparser = require('body-parser');

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));
// app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burger-controllers.js');
app.use('/', router);

// Open Server
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});