class RecipeParser {
  constructor(data, cuisineType) {
    this.calories = parseInt(data.recipe.calories);
    this.name = data.recipe.label;
    this.prepTime = parseInt(data.recipe.totalTime);
    this.numIngredients = data.recipe.ingredients.length;
    this.ingredientList = this.makeIngredientString(data.recipe.ingredients)
    this.cuisineType = cuisineType
    this.servings = parseInt(data.recipe.yield)
  }

  makeIngredientString(ingredients) {
    var foodString = '';
    ingredients.forEach(ingredient => {
      foodString = foodString.concat(' ,', ingredient.text)
    })
    return foodString;
  }

}

module.exports = RecipeParser;
