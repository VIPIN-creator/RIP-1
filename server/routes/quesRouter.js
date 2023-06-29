const User = require('../models/user');
const Question = require('../models/question');
const express = require('express');
var router = express.Router();
const {auth} = require('./auth');


router.use('/', auth);

addQues = async (req, res) => {

    console.log(' question ', req.body);

    try {
        const ques = new Question(req.body);

        let newQues = await ques.save();

        if(newQues){
            
            res
                .status(200)
                // .cookie('jwt', token, {maxAge : maxAge*1000, secure: true, httpOnly : true, sameSite: 'lax' })
                .json({success : true});

            // console.log('new user added');
          
        }
        else throw 'error Question can not be created';
    } 
    catch (error) {
        if(error)console.log("error in backend adding question ", error);
        // const errors = handleErrors(error);
        res.status(400).json({error});
    }
        
}

seeQues = async (req, res) => {

    console.log('view question id ', req.params.id);

    try {
        // const ques = new Question(req.body);

        let viewQues = await Question.findById(req.params.id);

        if(viewQues){
            
            res
                .status(200)
                // .cookie('jwt', token, {maxAge : maxAge*1000, secure: true, httpOnly : true, sameSite: 'lax' })
                .json({success : true,
                       id :  viewQues._id,
                       title : viewQues.title,
                       statement : viewQues.statement,
                       inputFormat : viewQues.inputFormat,
                       outputFormat : viewQues.outputFormat,
                       testcases : viewQues.testcases
                      });

            // console.log('new user added');
          
        }
        else throw 'error Question can not be found';
    } 
    catch (error) {
        if(error)console.log("error in backend viewing question ", error);
        // const errors = handleErrors(error);
        res.status(400).json({error});
    }
        
}

listQues = async (req, res) => {

    // console.log('view question id ', req.params.id);

    try {
        // const ques = new Question(req.body);

        let allQues = await Question.find({});

        if(allQues){
            
            res
                .status(200)
                // .cookie('jwt', token, {maxAge : maxAge*1000, secure: true, httpOnly : true, sameSite: 'lax' })
                .json({success : true,
                       allQues: allQues
                      });

            // console.log('new user added');
          
        }
        else throw 'error no questions found';
    } 
    catch (error) {
        if(error)console.log("error in backend listing question ", error);
        // const errors = handleErrors(error);
        res.status(400).json({error});
    }
        
}

router.post('/', addQues);

router.get('/:id', seeQues);

router.get('/', listQues);

module.exports = router;