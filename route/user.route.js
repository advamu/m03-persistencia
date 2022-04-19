const express = require("express")
const { createUser } = require("../service/user.service")

const userRouter = express.Router()

userRouter.post('/', async (req, res) => {
    // sanitize
    const username = req.body.username 
    const password = req.body.password
    // crear usuari nou
    const newUser = await createUser(username, password)

    const UserReturn = { ...newUser }
    delete UserReturn.hash
    delete userRouter.salt
    res.status(200).send(UserReturn)
})

module.exports = userRouter