var express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
var app = express();
require('dotenv').config

pathtoTemplate = __dirname + '/views/index.html'
pathtoPublic = __dirname +'/public'

// this way, can use the files into public dir..css anywhere
app.use('/public',express.static('public'));



app.get('/',function(req,res){
    res.sendFile(pathtoTemplate);
});

app.get('/json',function(req,res){
    res.json({
        "message":process.env.MESSAGE_STYLE
    });
})






























 module.exports = app;
