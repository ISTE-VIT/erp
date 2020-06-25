const express=require("express");
const app=express();
const mongoose=require("mongoose");



const bodyParser=require("body-parser");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));




mongoose.connect("mongodb://localhost:27017/erpDB",{ useNewUrlParser: true, useUnifiedTopology: true});

//routes
app.use("/",require("./routes/studentsignin"));
app.use("/teacher's-login.html",require("./routes/teachersignin"));
app.use("/tmessage",require("./routes/teachermessage"));
app.use("/Stumessages",require("./routes/studentmessage"));
app.use("/feepay",require("./routes/feepay"));
app.use("/stmarks",require("./routes/studentmarks"));
app.use("/stresources",require("./routes/stresources"));
app.use("/stassign",require("./routes/stassign"));
app.use("/tmarks",require("./routes/teachermarks"));
app.use("/tresources",require("./routes/teacherresources"));
app.use("/tassign",require("./routes/tassign"));
app.use("/logout",function(request,response){
    response.redirect("/");
})


app.listen(3000,function(){
    console.log("server is running on port 3000");
});