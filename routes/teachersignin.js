const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const faculty=require("../modules/teacher");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/erpDB",{ useNewUrlParser: true, useUnifiedTopology: true});



// const newfaculty=new faculty({
//     facultyID:"Xarz-19Q24",
//     password:"asdf",
//     name:"Xavier",
//     emailID:"xavier@faculty.in",
//     education:"PHD",
//     subject:"Data Structures and Algorithm",
//     image:"./Images/Charlesprofile.jpg",
// });
// newfaculty.save();




app.get("/",function(request,response){
    response.render("teacher's-login");
});

app.post("/",function(request,response){
    const ID=request.body.facultyID;
    const password=request.body.pass;
    faculty.findOne({facultyID:ID},function(err,found){
        if(found)
        {
            if(password===found.password)
            response.render("teacherID",{ID:found.facultyID,N:found.name,eID:found.emailID,ed:found.education,sub:found.subject});
            else
            response.send("You are not registered");
        }
        else
        response.send("You are not registered");
    });
});



module.exports=app;