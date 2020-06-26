const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/erpDB",{ useNewUrlParser: true, useUnifiedTopology: true});
const Message=require("../modules/message");

app.get("/",function(request,response){
    Message.find({},function(err,foundmessage){
        response.render("st-classmsg",{Messages:foundmessage});
    });
    
});

module.exports=app;