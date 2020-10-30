const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

// routes
const routesAuth = require('./routes/authRoutes')

// port server
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/auth', routesAuth )
app.get('', (req, res) => {
    res.send({
        "Welcome": "API - Autentication Users"
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port} ...`)
})

