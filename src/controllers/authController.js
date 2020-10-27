const express = require('express')
const router = express.Router()
const User = require('../models/User')



router.post('/register', async (req, res) => {
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
})

module.exports = app => app.use('/auth', router)