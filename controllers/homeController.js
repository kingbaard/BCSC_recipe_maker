"use strict"
const Recipe = require('../models/Recipe');


module.exports = {
    viewIndex : async(req, res) => {
      const DBrecipes = await Recipe.find({})
        res.render("index", {DBrecipes})
    }
}