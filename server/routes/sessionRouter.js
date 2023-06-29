const express = require('express');
var router = express.Router();
const Session = require('../models/session');
const {auth} = require('../routes/auth');
const User = require('../models/user');

router.use('/', auth);

createSession = async (req, res) => {

    console.log(' session ', req.body);

    try {
        const session = new Session(req.body);

        for(let InterviewerMail of req.body.interviewer){
            const Interviewer = await User.findOne({email : InterviewerMail, type : 'admin'});
            if(Interviewer){
            }
            else{
                throw 'check the mails of Interviewer';
            }
        }

        for(let IntervieweeMail of req.body.interviewee){
            const Interviewee = await User.findOne({email : IntervieweeMail, type : 'standard'});
            if(Interviewee){
            }
            else{
                throw 'check the mails of Interviewee';
            }
        }

        let newSession = await session.save();

        if(newSession){
            
            // const token = createToken(newUser._id);

            res
                .status(200)
                // .cookie('jwt', token, {maxAge : maxAge*1000, secure: true, httpOnly : true, sameSite: 'lax' })
                .json({success : true});

            // console.log('new user added');
          
        }
        else throw 'error new session can not be created';
    } 
    catch (error) {
        if(error)console.log("error in backend creating session ", error);
        // const errors = handleErrors(error);
        res.status(400).json({error});
    }
        
}

sessionInfo = async(req, res) => {
    console.log(req.auth);
    try{
        const allSessions = await Session.find({
            $or : [
                {interviewee : req.auth.email},
                {interviewer : req.auth.email}
            ]
        });

        if(allSessions){
            res.status(200)
                .json({success: true,
                    sessions: allSessions});
        }
        else throw 'No sessions found for this user';

    }
    catch(err){
        res.status(400).json({success: false, err});
    }
}

router.post('/create', createSession);

router.get('/info', sessionInfo);



module.exports = router;