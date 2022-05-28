const express = require('express');
const routers = express.Router();

const { 
    signUp,
    signIn,
    logOut

   } = require('../controllers/authController');


routers.post('/signUp', signUp);

routers.post('/signIn', signIn);

routers.get('/signOut', logOut);

module.exports = {
    routes: routers
}