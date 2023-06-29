const express  = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// always check the user for any route request
exports.auth = (req, res, next) => {
        const token = req.headers.authorization?req.headers.authorization.split(' ')[1]:null;
        console.log(token);
    
        if(token){
            jwt.verify(token, 'privacy_is_a_myth', async (err, decodedToken) => {
                if(err){
                    // res.locals.user = null;
                
                    // res.render('home-guest');
                    res.json({
                        error: {
                            status: true,
                            message: 'Invalid credentials',
                        }
                    });
                } 
                else{
                    let user = await User.findById(decodedToken.id);
                            
                    console.log('User info is ', user);
                    req.auth = user;
                    next();
                }
            });
        } 
        else{
            // res.locals.user = null;
            res.json({
                error: {
                    status: true,
                    message: 'Error'                }
            });
        }    
    
};