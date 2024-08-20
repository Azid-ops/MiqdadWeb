const express = require('express')
const UserRouter = express.Router()
const { Registration, login, getDetails, setDetails, updateDetails, deleteUser } = require('../Controllers/userController')
const { verifyUser } = require("../MiddleWare/middleWare");

UserRouter.post('/login', login);
UserRouter.post('/registration', Registration);
UserRouter.get('/home', verifyUser ,getDetails);
UserRouter.post('/details', verifyUser ,setDetails);
UserRouter.delete('/remove', verifyUser ,deleteUser);
UserRouter.patch('/update', verifyUser ,updateDetails);

module.exports = UserRouter;