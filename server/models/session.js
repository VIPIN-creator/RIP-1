const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'First name must not be empty']
    },
    interviewer : Array,
    interviewee : Array
});


const Session = mongoose.model('Session', SessionSchema); 


module.exports = Session;