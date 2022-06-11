const express = require('express')
const UsersController = require('../controllers/usersController')

const router = express.Router();


router.get('/user', UsersController.showLoginPage)
router.post('/user', UsersController.login)
router.get('/user/admin', UsersController.showCreateUserPage)
router.post('/user/admin', UsersController.create)

module.exports = router