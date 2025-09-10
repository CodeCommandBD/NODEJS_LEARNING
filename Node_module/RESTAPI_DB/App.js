const express = require('express')
const path =require('path')
const cors = require('cors')
const router= require('./routes/user.routes')

const app = express()

// TODO: ######### DB CONNECT 
// TODO: ######### DB CONNECT 

require('./Config/db')




// TODO: ########### SETUP
// TODO: ########### SETUP

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
app.use('/api/user',router)


// TODO: ################# HOME
// TODO: ################# HOME
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/Views/index.html'))
})

// TODO: ################# PAGE ERROR
// TODO: ################# PAGE ERROR
app.use((req, res)=>{
    res.status(404).json({
        message: 'route not found'
    })
})
// TODO: ################# SERVER ERROR
// TODO: ################# SERVER ERROR
app.use((req, res)=>{
    res.status(500).json({
        message: 'SOMETHING BROKE!'
    })
})


module.exports = app 