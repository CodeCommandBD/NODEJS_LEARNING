require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

const userRouter = require('./Routes/user.routes')




app.use(express.urlencoded())
app.use(userRouter)





app.use((req, res)=>{
    res.status(404).json({
        message: 'page not found'
    })
})

app.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`);
    
})