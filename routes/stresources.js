const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/erpDB",{ useNewUrlParser: true, useUnifiedTopology: true});

app.get("/",function(request,response){
    response.render("st-resources");
});

module.exports=app;