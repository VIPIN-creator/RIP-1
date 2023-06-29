const express = require('express');

const router = express.Router();
// const users = require('./users/index');
const { createUser } = require('./users/createUser');

/* GET users listing. */


router.post('/',createUser);

module.exports = router;