const express = require('express')

const { getUser, postUser } = require('../Controllers/user.controller')
const router = express.Router()

router.get('/user', getUser)

router.post('/register', postUser)

module.exports = router