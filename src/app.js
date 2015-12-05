var express = require('express');
var app     = express();
var routes  = require('./routes')

app.use(routes);

module.exports = app;
