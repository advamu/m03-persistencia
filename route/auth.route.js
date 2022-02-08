const express = require("express");
const { append } = require("express/lib/response");
const authRouter = express.Router

authRouter.post('/login', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
})

module.exports = authRouter
