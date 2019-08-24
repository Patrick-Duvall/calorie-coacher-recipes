'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    prepTime: DataTypes.INTEGER,
    numIngredients: DataTypes.INTEGER,
    ingredientList: DataTypes.STRING,
    cuisineType: DataTypes.STRING,
    url: DataTypes.STRING,
    image: DataTypes.STRING,
    servings: DataTypes.INTEGER
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};
