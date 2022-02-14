const User = require("../model/user.model")

const createUser = async (username, password) => {
    // verificar que l'usuari no existeix
    const userExist = await User.findOne({username: username})
    if(UserExist)
        throw new Error('El usuari existeix')
    // verificar que la contrasenya compleix estandar
    
    // Crear usuari
    const newUser = new User({username})
    await newUser.setPassword(password)
    return await newUser.save()
}

module.exports = { 
    createUser,
}