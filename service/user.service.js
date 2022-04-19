const User = require("../model/user.model")

const createUser = async (username, password) => {
    // verificar que l'usuari no existeix
    const userExist = await User.findOne({username: username})
    if(userExist)
        throw new Error('El usuari existeix')
    // verificar que la contrasenya compleix estandar
    // check(password).isLenght({ min: 8 })
    // Crear usuari
    const newUser = new User({ username })
    await newUser.setPassword(password)
    return await newUser.save()
}

const getUser = async (id) => {
return await User.findById(id)
}

module.exports = { 
    createUser,
    getUser,
}