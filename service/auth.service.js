const User = require("../model/user.model")
const jwt = require("jsonwebtoken")
const { getUser } = require("./user.service")
const { off } = require("../model/user.model")

const login = async (username, password) => {
    // comprovar user per username
    const user = await User.findOne({username})
    // comprovar que el passwd es correcte
    const isAuthenticated = await user.verifyPassword(password)
    if(!isAuthenticated) {
        return null
    }
    return await user.generateToken();
}

const verifyToken = async (token) => {
    /*console.log(token);*/
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
return await getUser(decoded.userId)
}


module.exports = {
    login,
    verifyToken
}