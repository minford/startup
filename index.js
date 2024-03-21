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
  
  let recipes = [];

  apiRouter.post('/recipes', (req, res) => {
    const newRecipe = req.body;
    recipes.push(newRecipe);
    res.send(recipes);
  });
  
  apiRouter.get('/recipes', (_req, res) => {
    res.send(recipes);
  });
  
  apiRouter.post('/rate', (req, res) => {
    const { recipeName, rating } = req.body;
    const recipeIndex = recipes.findIndex(recipe => recipe.name === recipeName);
  
    if (recipeIndex !== -1) {
      // Add the rating to the recipe's ratings array
      recipes[recipeIndex].ratings.push(rating);
  
      // Calculate the average rating for the recipe
      const totalRating = recipes[recipeIndex].ratings.reduce((acc, curr) => acc + curr, 0);
      const averageRating = totalRating / recipes[recipeIndex].ratings.length;
  
      res.json({ success: true, averageRating });
    } else {
      res.status(404).json({ success: false, message: 'Recipe not found' });
    }
  });