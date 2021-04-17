const Recipe = require('../models/Recipe')
var colors = require('colors')

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
exports.show = async(req, res, next) => {
  let recipeId = req.params.id;

  try {
    let recipe = await Recipe.findById(recipeId)
    if(recipe){
      res.locals.recipe = recipe;
      next();
    }
  } catch (error) {
    console.log(`Error fetching recipe by ID: ${error.message}`.bold.red);
    next(error);
  }
}

exports.showView = (req, res, next) => {
  res.render("show")
},

// @Method  GET
exports.addRecipeIndex = (req, res) =>{
  console.log(req.body)
  res.render('create')
}


exports.createRecipe = async(req, res) => {
 
  console.log(req.body)
  res.redirect('/')
  // let recipeParams = {
  //   servings: req.body.servings,
  //   title: req.body.title,
  //   ingredients: req.body.ingredient ? [req.body.ingredient.split(",")] : ""
  //   // blends: req.body.blends
  // };

  // console.log(recipeParams)
  // Recipe.create(recipeParams)
  //   .then(recipe => {
  //     if (recipe) {
  //       req.flash("sucess", "New recipe sucessfully added to database!")
  //     } else {
  //       req.flash("error", "Something went wrong and we were unable to add recipe to database.")
  //     }
  //     res.locals.recipe = recipe;
  //     next();
  //   })
  //   .catch(error => {
  //     console.log(`Error saving course: ${error.message}`);
  //     next(error);
  //   });
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