let express = require("express");
let app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
  res.send("OK.");
});

module.exports = app;
