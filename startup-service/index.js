const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//keep track of recipe lists
let recipes = [];
let savedRecipes = [];

apiRouter.post('/recipes', (req, res) => {
  const newRecipe = req.body;
  recipes.push(newRecipe);
  res.send(recipes);
});

apiRouter.get('/recipes', (_req, res) => {
  //console.log(recipes);
  res.send(recipes);
});

apiRouter.post('/saved-recipes', (req, res) => {
  const newRecipe = req.body;
  savedRecipes.push(newRecipe);
  res.send(savedRecipes);
});

apiRouter.get('/saved-recipes', (_req, res) => {
  res.send(savedRecipes);
});

apiRouter.post('/rate', (req, res) => {
  const recipeIndex = recipes.findIndex(recipe => recipe.name === req.body.recipeName);
  if (recipeIndex !== -1) {
    // Add the rating to the recipe's ratings array
    recipes[recipeIndex].ratings.push(req.body.rating);
    //console.log('Here');
    // Calculate the average rating for the recipe
    const totalRating = recipes[recipeIndex].ratings.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0);
    //console.log(totalRating);
    console.log(recipes[recipeIndex].ratings);

    //console.log(typeof totalRating);
    const averageRating = totalRating / recipes[recipeIndex].ratings.length;
    //console.log(averageRating);
    recipes[recipeIndex].rating = averageRating;

    res.json({ success: true, averageRating });
  } else {
    res.status(404).json({ success: false, message: 'Recipe not found' });
  }
});


//TODO: Make sure averageRating is getting the right number and update recipe.rating to be the average rating so that it shows on the recipes page and single recipes page correctly