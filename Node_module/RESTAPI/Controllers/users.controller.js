
let users = require('../Models/users.models')
const {v4: uuidv4} = require('uuid')

// TODO: ############## GET USER 
// TODO: ############## GET USER 

const getUser = (req, res)=>{
    res.status(200).json({users})
}

// TODO: ############# CREATE USER
// TODO: ############# CREATE USER

const postUser = (req, res)=>{
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email
    }
    users.push(newUser)
    res.status(200).json({
        users
    })
}

// TODO: ############# UPDATE USER
// TODO: ############# UPDATE USER

const putUser = (req, res)=>{
    const id = req.params.id 
    const {username, email} = req.body
    users.filter((user)=>user.id === id).map((selectedUser)=>(
        selectedUser.username = username,
        selectedUser.email = email
    ))

    res.status(200).json({
        users
    })
}
// TODO: ############# DELETE USER
// TODO: ############# DELETE USER

const deleteUser = (req, res)=>{
    const id = req.params.id 
    users = users.filter((user)=>user.id !== id)

    res.status(200).json({
        users
    })
}

module.exports = {getUser, postUser, putUser, deleteUser}