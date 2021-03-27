const express = require('express')
const router = express.Router()

const guest = require('../middleware/authRedirect')
const authController = require('../controllers/authController')

router.post('/register', guest, authController.register)
router.post('/signin', guest, authController.signin)
router.get('/signout', authController.signout)

module.exports = router