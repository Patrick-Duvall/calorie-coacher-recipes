var Recipe = require('../../../../models').Recipe;
var RecipePresenter = require('../../../../pojos/recipe_presenter.js');

var index = function (req, res) {
  Recipe.findAll()
    .then(recipe_info => {
      res.setHeader("Content-Type", "application/json");
      let recipes = recipe_info.map(recipe => new RecipePresenter(recipe))
      // console.log(recipe_info)
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
