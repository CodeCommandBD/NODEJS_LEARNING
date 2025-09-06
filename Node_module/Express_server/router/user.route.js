const express = require('express')
const path = require('path')

const router = express.Router() 


router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})
router.post('/register', (req, res) => {
    const fullName = req.body.fullName
    res.send(`your fullName is : ${fullName}`)
})



module.exports = router