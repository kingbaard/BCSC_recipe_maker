const express = require('express')

const recipeController = require('../controllers/recipeControllers')

const router = express.Router()

router.get('/', recipeController.index)

router.get('/addrecipe', recipeController.addRecipeIndex)
router.post('/addrecipe', recipeController.addRecipe)

router.get('/editrecipe/:id', recipeController.editRecipe)

router.get('/:id', recipeController.getRecipe)


module.exports = router