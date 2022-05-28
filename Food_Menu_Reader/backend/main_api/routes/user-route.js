const express = require('express');

const {
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
   } = require('../controllers/userController');

const routers = express.Router();

routers.post('/user/new', addUser);

routers.get('/user/list', getAllUsers);

routers.get('/user/:id', getUser);

routers.put('/user/update/:id', updateUser);

routers.delete('/user/delete/:id', deleteUser);

module.exports = {
    routes: routers
}