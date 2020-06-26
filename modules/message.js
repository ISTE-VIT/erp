const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/erpDB",{ useNewUrlParser: true, useUnifiedTopology: true});

const msageeSchema=new mongoose.Schema({
    classMessage:String,
});
const msagee=mongoose.model("msagee",msageeSchema);

module.exports=msagee;