var express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
var app = express();

pathtoTemplate = __dirname + '/views/index.html'
pathtoPublic = __dirname +'/public'

// this way, can use the files into public dir..css anywhere
app.use('/public',express.static('public'));



app.get('/',function(req,res){
    res.sendFile(pathtoTemplate);
});

app.get('/json',function(req,res){
    alert(process.env.MESAGGE_STYLE);
    res.json({
        "message":process.env.MESAGGE_STYLE
    });
})






























 module.exports = app;
