require('dotenv').config()
const fetch = require('node-fetch')
const RecipeParser = require('./parsers/recipe_parser')
// const Recipe = require('./models/recipe')

function seedRecipes() {
  let id = process.env.EDAMAM_ID
  let key = process.env.EDAMAM_KEY
  let calorie_max = '300'

  var url = new URL("https://api.edamam.com/search")
  var params = {
    q: '*',
    cuisine_type: 'chinese',
    app_id: process.env.EDAMAM_ID,
    app_key: process.env.EDAMAM_KEY,
    to: 10,
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
      })
      parsedRecipes.forEach(recipe => {
        Recipe.create(recipe)
      })
    })
}
//   Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
//
//   fetch(`https://api.edamam.com/search?q=*&app_id=${id}&app_key=${key}&from=0&to=100&calories=0-${calorie_max}&excluded=${excluded}&diet=${diet}&health=${health}`)
// }

// https://api.edamam.com/search?q=*&app_id={id}&app_key={key}&from=0&to=100&calories=0-{calorie_max}&excluded={excluded}&diet={diet}&health={health}

seedRecipes();
