
const bcrypt = require('bcryptjs')

// model
const User = require('../models/User')


const register =  async (req, res) => {
    const { email } = req.body

    try {
        if ( await User.findOne({ email }))
            res.status(400).send({ Error: "user aready existes" })

    const user = await User.create(req.body)
    user.password = undefined
    return res.send({ user }) 
    
    } catch (error) {
        return res.status(400).send({ error: 'Conection failed' })
    }
}

const authenticate = async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({ email }).select('+password')

    if (!user)
        return res.status(400).send({ error: 'User not found' })
    
    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'User not authenticate' })
    
    return res.send({ user })
}

module.exports = {
    register,
    authenticate
}