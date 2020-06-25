const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

const Mark=require("../modules/marks");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/erpDB",{ useNewUrlParser: true, useUnifiedTopology: true});

app.get("/",function(request,response){
    Mark.find({},function(err,foundmarks){
        response.render("st-marks",{Marks:foundmarks});
    });
    
});

module.exports=app;