var express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
var app = express();

pathtoTemplate = __dirname + '/views/index.html'
pathtoPublic = __dirname +'/public'

app.use(express.static(pathtoPublic),'style.css');

app.get('/',function(req,res){
    res.sendFile(pathtoTemplate);
});
































 module.exports = app;
