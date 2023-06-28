const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    interviewer : Array,
    interviewee : Array
});


const Session = mongoose.model('Session', SessionSchema); 


module.exports = Session;