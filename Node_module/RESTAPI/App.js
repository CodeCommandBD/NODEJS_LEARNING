const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./Routes/user.routes')

const app = express()

// TODO: ############# API AND GET BODY DATA SETUP
// TODO: ############# API AND GET BODY DATA SETUP

app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use('/user',router)

// TODO: ############# HOME ROUTE
// TODO: ############# HOME ROUTE
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname + '/Views/index.html'))
})

// TODO: ############# ROUTE NOT FOUND ERROR
// TODO: ############# ROUTE NOT FOUND ERROR
app.use((req, res)=>{
    res.status(404).json({
        message: 'route not found'
    })
})

// TODO: ############# SERVER ERROR
// TODO: #############  SERVER ERROR
app.use((err, req, res, next)=>{
    res.status(500).json({
        message: 'something break!'
    })
})


module.exports = app