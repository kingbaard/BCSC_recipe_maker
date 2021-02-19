"use strict";

//array of recipe objects for testing

let recipeList = [
    {
        name: "Mac and Cheese",
        ingredients: [{
                name: "cheese",
                baseAmount: 5
            },
            {
                name: "macaroni",
                baseAmount: 10
            }]},
    {
        name: 'Good soap',
        ingredients: [{
            name: "lavender oil",
            baseAmount: 10
        },
        {
            name: "apple juice",
            baseAmount: 4
        }
    ]
}];


exports.recipeList;
exports.showRecipes = (req, res) => {
    res.render("index.ejs", {DBrecipes : recipeList});
}