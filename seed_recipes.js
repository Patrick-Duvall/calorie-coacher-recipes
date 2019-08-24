require('dotenv').config()
const fetch = require('node-fetch')
const RecipeParser = require('./parsers/recipe_parser')
const Recipe = require('./models').Recipe

var foods = ['indian', 'chinese', 'american', 'mexican', 'french']
async function seedRecipes() {
  await Recipe.destroy({
      where: {},
      truncate: true
    })
  let id = process.env.EDAMAM_ID
  let key = process.env.EDAMAM_KEY

  foods.forEach( food => {
    var url = new URL("https://api.edamam.com/search")
    var params = {
      q: '*',
      cuisine_type: food,
      app_id: process.env.EDAMAM_ID,
      app_key: process.env.EDAMAM_KEY,
      to: 100,
      health: 'alcohol-free',
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        let parsedRecipes = data.hits.map(recipeInfo => {
          return new RecipeParser(recipeInfo, params.cuisine_type)
          console.log(parsedRecipes);
        })
        parsedRecipes.forEach(recipe => {
          Recipe.create(recipe)
        })
      })
  })
}
seedRecipes();
