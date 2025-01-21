const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/Users.js') //need the schema model here

//register
const registerUser = async (req, res) => {
    const { userName, email, password } = req.body
    try {
        const hashPassword = await bcrypt.hash(password, 12)
        const newUser = new User({//User-->model
            userName, email, password: hashPassword
        })
        await newUser.save()
        res.status(200).json({
            success: true,
            message: "Registered succesfully"
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Some error occured"
        })
    }

}
//login
const loginUser = async (req, res) => {
    const { userName, email, password } = req.body
    try {

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Some error occured"
        })
    }

}

//logout
//auth middleware


module.exports = {registerUser}