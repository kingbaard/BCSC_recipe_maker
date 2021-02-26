const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  servings: Number,
  title: String,
  ingredients: [
    {
      name: String,
      amount: Number,
      measurement: String
    }
  ],
  blends: {
    title: String
  },
  ingredients: [
    {
      name: String,
      amount: Number,
      measurement: String
    }
  ]
})

module.exports = mongoose.model('recipe', recipeSchema)