const { getUser, createUser, deleteUser, getOneUser, updateUser } = require('../Controller/user.controller')

const router = require('express').Router()

router.get('/', getUser)
router.get('/:id', getOneUser)
router.post('/', createUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)


module.exports = router