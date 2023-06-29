const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
   title : {
    type : String,
    unique : true,
    dropDups: true,
    required : [true, "Question name can not be empty"]
   },

   statement : {
    type : String,
    unique : true,
    dropDups: true,
    required : [true, "Question body can not be empty"]
   },

   inputFormat : {
    type : String,
   },

   outputFormat : {
    type : String,
   },

   testcases : {
    type : [
        {
            input : {
                type : String, 
                required : [true, "Input must not be empty"]
            },
            output : {
                type : String, 
                required : [true, "Output must not be empty"]
            }
        }
    ],
    required : [true, "Add some testcases"]
   }

});


const Question = mongoose.model('Question', QuestionSchema); 


module.exports = Question;