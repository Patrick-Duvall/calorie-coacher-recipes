var Recipe = require('../../../models').Recipe;
var RecipePresenter = require('../../../pojos/recipe_presenter.js');
var Sequelize = require('sequelize')
// var Op = Sequelize.Op

var index = function (req, res) {
  console.log(req.query)
  Recipe.findAll({order: [
    ['numIngredients', 'ASC']
  ]
        })
  .then(recipe_info => {
    let recipes = recipe_info.map(recipe => new RecipePresenter(recipe))
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(recipes));
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({ error });
  })
}

module.exports = {
  index: index
}
