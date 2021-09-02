var express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
var app = express();

pathtoTemplate = __dirname + 'views/index.html'
app.get('/',function(req,res){
    res.send(pathtoTemplate);
});

































 module.exports = app;
