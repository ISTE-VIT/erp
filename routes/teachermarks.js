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
    response.render("t-marks");
});

app.post("/",function(request,response){
    const regno=request.body.regno;
    const da1=request.body.da1;
    const da2=request.body.da2;
    const midsem=request.body.midsem;
    const fat=request.body.fat;
    
    const newmarks=new Mark({
        regno:regno,
        da1:da1,
        da2:da2,
        midsem:midsem,
        fat:fat
    });

    newmarks.save();
    response.render("t-marks");
})

module.exports=app;