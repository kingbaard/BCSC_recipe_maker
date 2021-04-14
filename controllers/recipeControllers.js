const Recipe = require('../models/Recipe')
const User = require('../models/User')

// @Method  GET
exports.viewIndex = async(req, res) =>{
  const DBrecipes = await Recipe.find({})
  res.render('index', {DBrecipes})
  // res.send(DBrecipes)
}

exports.viewEdit = async(req, res, next) => {
  const recipe = await Recipe.findById(req.params.id)
  res.render('edit', {recipe})
}

// @Method  GET
exports.getRecipe = async(req, res) =>{
  const id = req.params.id
  const recipe = await Recipe.findById(id)
  res.send(recipe)
}

// @Method  GET
exports.show = (req, res, next) => {
  let recipeId = req.params.id;
  Recipe.findById(recipeId)
    .then(recipe => {
      res.locals.recipe = recipe;
      next();
    })
    .catch(e => {
      console.log(`Error fetching recipe by ID: ${e.message}`);
      next(e);
    });
},

exports.showView = (req, res, next) => {
  res.render("show")
}

// @Method  GET
exports.addRecipeIndex = async(req, res) =>{
  res.render('create')
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
  let recipeId = req.params.id
  updatedRecipeAttr = {
    servings: req.body.servings,
    title: req.body.title,
    ingredients: [req.body.items.split(",")],
    blends: [req.body.blends.split(",")]
  }
  Recipe.findByIdAndUpdate(recipeId, {
    $set: updatedRecipeAttr
  })
}

// @Method  DELETE
exports.deleteRecipe = async(req, res,) =>{
  const id = req.params.id
  await Recipe.findByIdAndRemove(id)
  res.redirect('/recipes')
}