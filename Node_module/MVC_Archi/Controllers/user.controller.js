const path = require('path')
const addUser = require('../Model/user.model')

exports.getUser = (req, res)=>{
    res.sendFile(path.join(__dirname + '/../Views/form.html'))
}


exports.postUser = (req, res)=> {
    const name = req.body.name
    const age = Number(req.body.age) 
    const user = {
        name,
        age
    }
    addUser.push(user)
    res.status(200).json({
        success: true,
        addUser
    })
}