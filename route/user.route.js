const express = require("express")

const userRouter = express.Router()

userRouter.post('/user', async (req, res) => {
    // sanitize
    const username = req.body.username 
    const password = req.body.password
    // crear usuari nou
    const newUser = await createUser(username, password)
})

module.exports = userRouter