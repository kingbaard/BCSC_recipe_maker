const express = require('express')

const auth = require('../middleware/authCheck')
const recipeController = require('../controllers/recipeControllers')

const router = express.Router()

// router.get('/', auth, recipeController.index)

// router.get('/addrecipe', auth, recipeController.addRecipeIndex)
// router.post('/addrecipe', auth, recipeController.addRecipe)

// router.get('/editrecipe/:id', auth, recipeController.editRecipe)

// router.get('/:id', auth, recipeController.getRecipe)
// router.delete('/:id', auth, recipeController.deleteRecipe)

router.get('/', recipeController.viewIndex)

router.get('/addrecipe', recipeController.addRecipeIndex)
router.post('/addrecipe', recipeController.createRecipe, recipeController.viewIndex)

router.get('/:id/edit', recipeController.viewEdit)
router.post('/:id/edit', recipeController.getRecipe)

router.get('/:id', recipeController.show,  recipeController.showView)
router.post('/delete/:id', recipeController.deleteRecipe)

module.exports = router