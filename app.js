let express = require("express");
let app = express();

app.get('/',function(req,res){
  res.send("OK.");
});

module.exports = app;
