const express=require("express");
const app=express();
const mongoose=require("mongoose");

const bodyParser=require("body-parser");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/erpDB",{ useNewUrlParser: true, useUnifiedTopology: true});

const marksSchema=new mongoose.Schema({
    regno:String,
    da1:String,
    da2:String,
    midsem:String,
    fat:String
    
});
const mark=mongoose.model("mark",marksSchema);

module.exports = mark;

