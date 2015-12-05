var express = require('express');
var path    = require('path');
var app     = express();
var routes  = require('./routes');

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/../public')));
app.use(routes);

module.exports = app;
