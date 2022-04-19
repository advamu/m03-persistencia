
const res = require('express/lib/response')
const { verifyToken } = require('../service/auth.service')

const middleware = async (req, res, next) => {
//console.log(req)
try {
    const token = req.headers.authorization
    const user = await verifyToken(token)
    console.log(user)
    if(!user) {
        return res.status(401).send("Invalid Token authorization")
    }
} catch(err) {
    return res.status(401).send("Invalid Token authorization2")
}

next()
}

module.exports = middleware