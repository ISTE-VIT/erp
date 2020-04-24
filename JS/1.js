const express = require("express");
const app = express();
app.get("/",function(request,response){response.sendfile(__dirname+"/x.html");});
app.listen(3000,function(){console.log("Server on-line");});
app.post("/",function(request,response){response.send("you suck");});