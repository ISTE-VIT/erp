const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const passport=require("passport");




app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));



mongoose.connect("mongodb://localhost:27017/erpDB",{ useNewUrlParser: true, useUnifiedTopology: true});
const Student=require("../modules/1");



//  const newstudent=new Student({
//      reg_no:"19BCM0204",
//      password:"qwerty",
//      name:"Mathew Shwarbatsky",
//      phone_no:7852875364,
//      gpa:9.3,
//      hostel:"G-227",
//      image:"./Images/st.jpg"
//  });
// newstudent.save();

// const newstudent2=new Student({
//     reg_no:"18BBM0420",
//     password:"qwerty1",
//     name:"Ram Lal",
//     phone_no:7906175364,
//     gpa:8.7,
//     hostel:"K-817",
//     image:"./Images/ram.jpg"
// });
// newstudent2.save();



app.get("/",function(request,response){
    response.render("Landing-page-st");
});



app.post("/profile",function(request,response,next){
    const reg=request.body.RegNo;
    const password=request.body.pass;
    // passport.authenticate("local",{
    //     successRedirect:"/profile",
    //     failureRedirect:"/"
    // })(req,res,next);
    // const stu= new Student({
    //     reg_no:
    //     password:
    // });
    // request.login(stu,function(err){
    //     if(err)
    //     console.log(err)
    //     else
    //     {
    //         passport.authenticate("local")(request,response,function(){
    //             response.redirect("/authen");
    //         });
    //     }
    // });
    Student.findOne({reg_no:reg},function(err,found){
        if(found)
        {
            if(password===found.password)
            response.render("student-profile",{PIC:found.image,R_no:found.reg_no,N:found.name,Pn:found.phone_no,Gp:found.gpa,Hos:found.hostel});
            else
            response.send("You are not registered");
        }
        else
        response.send("You are not registered");
    })
})

module.exports=app;