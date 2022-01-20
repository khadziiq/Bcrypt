const userRoute = require('express').Router()
const UserControllers = require('../controllers/UserController')

userRoute.get('/all', UserControllers.getUserAll)
userRoute.post('/auth/login', UserControllers.login)
userRoute.post('/auth/register', UserControllers.register)
module.exports = userRoute