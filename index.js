var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path');
    
require('./api/model.js')();  

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//app.use(express.static('./dist'));

app.use(express.static(path.join(__dirname, 'dist'))); 

app.use('/api/v1', require('./api/api.js')());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
}); 

app.listen('3000', function(){
    console.log('Listening in the port 3000');
}); 