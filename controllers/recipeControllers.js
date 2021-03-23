const Recipe = require('../models/Recipe')

// @Method  GET
exports.index = async(req, res) =>{
  const DBrecipes = await Recipe.find({})
  res.render('index', {DBrecipes})
}

// @Method  GET
exports.getRecipe = async(req, res) =>{
  const id = req.params.id
  const recipe = await Recipe.findById(id)
  res.send(recipe)
}

// @Method  GET
exports.addRecipeIndex = async(req, res) =>{
  res.send('add recipe page')
}

// @Method  POST
// TODO ask about recipes with same name
exports.addRecipe = async(req, res) =>{
  const {
    servings,
    title,
    ingredients,
    blends
  } = req.body  
  const newRecipe = new Recipe({servings, title, ingredients, blends})
  
  await newRecipe.save().then(()=>{
    res.send(newRecipe)
  })
}

// @Method  GET
exports.editRecipe = async(req, res) =>{
  res.send('edit recipe page')
}

// @Method  DELETE
exports.deleteRecipe = async(req, res,) =>{
  const id = req.params.id
  await Recipe.findByIdAndRemove(id)
  res.redirect('/recipes')
}