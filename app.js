require('dotenv').config()

const express = require('express')

const app = express()
const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
const path = require('path')
const helmet = require('helmet')

const PORT = process.env.PORT || 3000

app.use(helmet({
    frameguard: {
        action: 'deny',
    },
    hidePoweredBy: {
        setTo: process.env.POWERED_BY || 'fm',
    },
    dnsPrefetchControl: true,
}))

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/public')))

app.use('/', require('./routes/index.js'))
app.use('/dev', require('./routes/dev.js'))

app.listen(
    PORT
    , () => console.log(`${new Date().toLocaleTimeString('en-GB')}: Server initialised on PORT:${PORT}...`),
)
