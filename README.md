# calorie-coacher-recipes
This App is a Microservice for [quantifiable-self](https://github.com/Patrick-Duvall/quantifiable-self). It contains a database of recipes created by querying the [Edamam API](https://developer.edamam.com/edamam-docs-recipe-api). It then make this information available to both our main app, [quantifiable-self](https://github.com/Patrick-Duvall/quantifiable-self), and a [frontend](https://github.com/VinceCarollo/calorie_coacher_fe). The endpoints for this app can be hit in production at https://calorie-coacher-recipes.herokuapp.com/

## Supported endpoints
### GET /api/v1/recipes/search
Returns all recipes matching supplied params. Params are as follows
- food_type i.e. `/api/v1/recipes/search?food_type=chicken`. Returns all recipes containing chicken
- cuisine_type i.e. `/api/v1/recipes/search?cuisine_type=indian`. Returns all indian dishes
- calories i.e. `/api/v1/recipes/search?calories=300`. Returns all recipes with 300 OR LESS calories
- Recipes are returned in the following format:
```
 [
  {
    name: "chicken fried rice",
    calories: 200,
    prepTime: 75,
    numIngredients: 3,
    cuisine_type: 'chinese',
    servings: 10,
    thumbnail: "https://www.edamam.com/web-img/146/146c072c175df9f407f9516a3f6466eb.jpg",
    url: "http://www.101cookbooks.com/archives/a-frozen-yogurt-recipe-to-rival-pinkberrys-recipe.html"
  }
 ]
 ```



## Running Tests
Tests are written in [Mocha](https://mochajs.org/) and [Chai](https://chaijs.com/). Testing consists of running `npm test` to run the test suite. Make sure you've run `npm install` in the initial setup.

## Built With
* [JavaScript](https://www.javascript.com/)
* [Postgres](https://www.postgresql.org/)
* [Express](https://expressjs.com/)
* [Mocha](https://mochajs.org/)
* [Chai](https://chaijs.com/)
