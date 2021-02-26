const Recipe = require('../models/Recipe')

exports.index = async(req, res) =>{
  const recipes = await Recipe.find({})
  res.send(recipes)
}