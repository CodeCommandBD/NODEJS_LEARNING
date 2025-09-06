const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000


app.use(bodyParser.urlencoded())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/circle', (req, res) => {
    res.sendFile(path.join(__dirname, 'circle.html'))
})
app.get('/triangle', (req, res) => {
    res.sendFile(path.join(__dirname, 'triangle.html'))
})


app.post('/triangle', (req, res) => {
    const height = req.body.height
    const base = req.body.base
    const area = (0.5 * height * base)
    res.send(`<h1>triangle: ${area}</h1>`)
})
app.post('/circle', (req, res) => {
    const radius = req.body.radius
    const area = (Math.PI * radius * radius)
    res.send(`<h1> circle area: ${area}</h1>`)
})




app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
    
})