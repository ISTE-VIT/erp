const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const Message=require("../modules/message");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/erpDB",{ useNewUrlParser: true, useUnifiedTopology: true});




app.get("/",function(request,response){
    response.render("Teacher-msg");
});

app.post("/msg",function(request, response){
    const message= request.body.message;
    const newMessage=new Message({
        classMessage:message
    });
    newMessage.save();
    response.render("Teacher-msg");
});


module.exports=app;

