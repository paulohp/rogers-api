// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var roger          = require('rogers');
var app            = express();

app.use(express.static(__dirname + '/public'));   // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                           // log every request to the console
app.use(bodyParser());                            // pull information from html in POST
app.use(methodOverride());                        // simulate DELETE and PUT


roger.openConn({public_key: '2f435d0d8c3bef196a3246d0e345d7d2', private_key: 'v17824cddf39bf747f98cdf7c9b1cefd272b60f94'});

app.listen(3000);
console.log('Magic happens on port ' + 3000);     // shoutout to the user
