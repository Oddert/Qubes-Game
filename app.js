require('dotenv').config()

const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')
    , path = require('path')
    , helmet = require('helmet')

const PORT = process.env.PORT || 3000

app.use(helmet())

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/public')))

app.use('/', require('./routes/index.js'))

const server = app.listen(
  PORT
  , () => console.log(`${new Date().toLocaleTimeString('en-GB')}: Server initialised on PORT:${PORT}...`)
)