class RecipeParser {
  constructor(data, cuisineType) {
    this.calories = parseInt(data.recipe.calories);
    this.name = data.recipe.label;
    this.prepTime = parseInt(data.recipe.totalTime);
    this.numIngredients = data.recipe.ingredients.length;
    this.url = data.recipe.url;
    this.image = data.recipe.image;
    this.ingredientList = this.makeIngredientString(data.recipe.ingredients)
    this.cuisineType = cuisineType
    this.servings = parseInt(data.recipe.yield)
    console.log(this);
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
