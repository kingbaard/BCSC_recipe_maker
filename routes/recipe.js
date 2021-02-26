const express = require('express')

const recipeController = require('../controllers/recipeControllers')

const router = express.Router()

router.get('/', recipeController.index)

module.exports = router