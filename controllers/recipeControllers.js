const Recipe = require('../models/Recipe')

exports.index = async(req, res) =>{
  const recipes = await Recipe.find({})
  res.send(recipes)
}

exports.getRecipe = async(req, res) =>{
  const id = req.params.id
  const recipe = await Recipe.findById(id)
  res.send(recipe)
}

exports.addRecipeIndex = async(req, res) =>{
  res.send('add recipe page')
}

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

exports.editRecipe = async(req, res) =>{
  res.send('edit recipe page')
}