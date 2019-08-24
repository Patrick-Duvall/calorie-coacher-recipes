class RecipePresenter {
  constructor(data) {
    this.calories = data.calories;
    this.name = data.label;
    this.prepTime = data.prepTime;
    this.numIngredients = data.numIngredients
    this.url = data.url;
    this.image = data.image;
    this.cuisineType = data.cuisineType
    this.servings = data.servings
  }
}

module.exports = RecipePresenter;
