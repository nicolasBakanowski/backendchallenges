var express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
var app = express();


app.get('/',function(req,res){
    res.send("Hello Express");
});

































 module.exports = app;
