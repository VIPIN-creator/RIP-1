const express = require('express');

const router = express.Router();
// const users = require('./users/index');
const { createUser } = require('./users/createUser');

/* GET users listing. */

router.get('/',users.get);

router.post('/',createUser);

router.post('/login', loginUser); 


router.post('/auth',users.auth);

router.use('/',users.authToken);

router.delete('/',users.delete);

router.patch('/',users.edit);

router.get('/auth',users.checkToken);

module.exports = router;