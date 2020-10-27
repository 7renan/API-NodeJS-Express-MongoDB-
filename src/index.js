const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')


// port server
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

require('./controllers/authController')(app)

app.listen(port, () => {
    console.log(`Server running on port ${port} ...`)
})

