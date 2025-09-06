const express = require('express')
const app = express()
const userRouter = require('./router/user.route')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

// Routes
app.use( userRouter)



app.use((req, res)=>{
    res.send('page not found')
})


module.exports = app
