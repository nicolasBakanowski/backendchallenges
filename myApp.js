var express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
var app = express();

pathtoTemplate = __dirname + '/views/index.html'
pathtoPublic = __dirname +'/public'


app.get('/',function(req,res){
    res.sendFile(pathtoTemplate);
});

app.use('/public',express.static(pathtoPublic));































 module.exports = app;
