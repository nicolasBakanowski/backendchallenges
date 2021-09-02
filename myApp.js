var express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
var app = express();
require('dotenv').config()
process.env.MESSAGE_STYLE='uppercase';

pathtoTemplate = __dirname + '/views/index.html'
pathtoPublic = __dirname +'/public'

// this way, can use the files into public dir..css anywhere
app.use('/public',express.static('public'));



app.get('/',function(req,res){
    res.sendFile(pathtoTemplate);
});

app.get('/json',function(req,res){
let response ={
    "mesagge":"Hello Json"
};   
    if(process.env.MESSAGE_STYLE === "uppercase"){
     response.mesagge=response.mesagge.toUpperCase();
    }
return res.json(response);    
})






























 module.exports = app;
