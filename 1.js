const express = require("express");
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(request,response){response.sendFile(__dirname+"/x.html");});
app.post("/",function(request,response){console.log(request.body.email)});
app.listen(3000,function(){console.log("Server on-line");});
