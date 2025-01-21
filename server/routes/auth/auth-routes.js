//which route i need to call, by using which controller 
const { registerUser } = require('../../controllers/auth/auth-controller.js')

const express = require('express')

const router = express.Router();

router.post('/register', registerUser)//whenever i call this route from F.E,i need to call registerUser controller,so import registerUser 


module.exports = router