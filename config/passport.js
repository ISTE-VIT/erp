const LocalStrategy=require("passport").Strategy;
const mongoose=require("mongoose");

const Student=require("../modules/1");

module.exports=function(passport){
    passport.use(
        new LocalStrategy({username:"reg_no"},(reg_no,password,done) => {
            //Match student reg no
            Student.findOne({reg_no:reg_no})
            .then(student => {
                if(!student){
                    return done(null,false)
                }
                else
                {
                    //match password
                    if(password===student.password)
                    return done(null,student);
                    else
                    return done(null,false)
                }
            })
            .catch(err => console.log(err));
        })

    );
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        Student.findById(id, function(err, user) {
          done(err, user);
        });
      });
};