var express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
var app = express();
require('dotenv').config()
var bodyParser = require('body-parser')
pathtoTemplate = __dirname + '/views/index.html'
pathtoPublic = __dirname +'/public'

// this way, can use the files into public dir..css anywhere
app.use('/public',express.static('public'));

app.use(function(req,res,next){
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string)
    next()

})
app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json());


app.get('/',function(req,res,next){
   
    res.sendFile(pathtoTemplate);
    next()
});

app.get('/json', function(req, res){
// Variable assignment as object
var response = {
  "message": "Hello json"
};

if(process.env.MESSAGE_STYLE==='uppercase'){
  //Override message attribute value based on condition
  response.message = response.message.toUpperCase();  
}

return res.json(response);
});


app.get('/now', function(req,res,next){
  req.time = new Date().toString();
  next();
},function(req,res){
  return res.send({"time": req.time})
})

app.get('/:word/echo',function(req,res){
  const {word} = req.params;
  res.json({
    echo: word
  })
})

app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});
















 module.exports = app;
