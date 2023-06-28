const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const md5 = require('md5');

const UserSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : [true, 'First name must not be empty'],
        // unique : true ,
        dropDups : true,
        minLength : [3, "Minimum length of first name must be 3"],
        maxLength : [8,  "Maximum length of first name must be 8"],
    },

    lastname : {
        type : String,
        required : [true, 'Last name must not be empty'],
        // unique : true ,
        dropDups : true,
        minLength : [3, "Minimum length of last name must be 3"],
        maxLength : [8,  "Maximum length of last name must be 8"],
    },

    password :{ 
      type : String,
      required : [true, 'Password must not be empty']
    }, 

    email : {
        type : String, 
        required : [true, 'Email must not be empty' ],
        unique : true,
        dropDups: true,
        lowercase : true,
        validate : [validator.isEmail, 'Please enter a correct email']
    },

    type : {
        type : String,
        enum : ['Interviewer', 'Interviewee'],
        required : [true, "User type must not be empty"]
    }
});

// // Instance methods
// UserSchema.methods.findByEmail = function(cb){
//     return mongoose.model('User').find({ email: this.email }, cb);
// };

// UserSchema.methods.findByUsername = function(cb){
//     return mongoose.model('User').find({ username: this.username }, cb);
// };

UserSchema.pre('save', async function(){
        const hash = await bcrypt.hash(this.password, 12); 
        this.password = hash;   

        const address = String(this.email).trim().toLowerCase();
        const hash2 = md5( address );
        // this.pic = `https://www.gravatar.com/avatar/${ hash2 }`;

});

UserSchema.methods.findUser = async function(email, password){

    try {

      const user = await mongoose.model('User').findOne({email : email});

      if(user){
        const found = await bcrypt.compare(password, user.password);

        if(found) return user;
        else throw 'Wrong password';

      }
      else throw 'User not exists';

    } catch (error) {
        throw error;
    }
  
  }


const User = mongoose.model('User', UserSchema); 


module.exports = User;