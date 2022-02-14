const User = require("../model/user.model")
const login = async (username, password) => {
    // comprovar user per username
    const user = await User.findOne({username: username})
    // comprovar que el passwd es correcte
    return user.verifyPassword(password)
}

module.exports = {
    login,
}