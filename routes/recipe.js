const express = require('express')

const auth = require('../middleware/authCheck')
const recipeController = require('../controllers/recipeControllers')

const router = express.Router()

router.get('/', auth, recipeController.index)

router.get('/addrecipe', auth, recipeController.addRecipeIndex)
router.post('/addrecipe', auth, recipeController.addRecipe)

router.get('/editrecipe/:id', auth, recipeController.editRecipe)

router.get('/:id', auth, recipeController.getRecipe)
router.delete('/:id', auth, recipeController.deleteRecipe)

module.exports = router