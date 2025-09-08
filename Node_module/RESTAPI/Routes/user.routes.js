const { getUser, postUser, putUser, deleteUser } = require('../Controllers/users.controller')

const router = require('express').Router()


router.get('/', getUser)
router.post('/', postUser)
router.put('/:id', putUser)
router.delete('/:id', deleteUser)

module.exports = router