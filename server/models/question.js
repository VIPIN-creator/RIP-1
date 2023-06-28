const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
   body : {
    type : String,
    required : [true, "Question body can not be empty"]
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