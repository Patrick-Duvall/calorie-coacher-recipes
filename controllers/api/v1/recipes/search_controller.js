var Recipe = require('../../../../models').Recipe;
var RecipePresenter = require('../../../../pojos/recipe_presenter.js');
var Sequelize = require('sequelize')
var Op = Sequelize.Op

var index = function (req, res) {
  Recipe.findAll({
    where: {
      [Op.or]: {
        ingredientList: {
          [Op.like]: `%${req.query.food_type}%`
        },
        cuisineType: {
          [Op.like]: `%${req.query.cuisine_type}%`
        },
        calories: {
          [Op.lte]: req.query.calories
        }
      }
    }
  })
  .then(recipe_info => {
    let recipes = recipe_info.map(recipe => new RecipePresenter(recipe))
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
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
