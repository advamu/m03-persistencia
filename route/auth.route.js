const express = require("express");
const { login } = require("../service/auth.service");
const authRouter = express.Router()

authRouter.post('/login', async (req, res) => {
    // sanejar
    const username = req.body.username
    const password = req.body.password
    
    // demanar autenticació al servei
    const token = await login (username, password)
    if(token){
        return res.send({ token: `Bearer ${token}` })
    }
    return res.status(403).send('usuari invalid o password')
})

module.exports = authRouter
