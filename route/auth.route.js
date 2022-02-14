const express = require("express");
const { login } = require("../service/auth.service");

//const authRouter = express.Router
const loginRouter = express.Router()

authRouter.post('/login', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
})

module.exports = authRouter
