const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/erpDB",{ useNewUrlParser: true, useUnifiedTopology: true});

const studentsSchema=new mongoose.Schema({
    reg_no:String,
    password:String,
    name:String,
    phone_no:Number,
    gpa:Number,
    hostel:String,
    image:String,
});

const Student=mongoose.model("Student",studentsSchema);
module.exports =Student;

