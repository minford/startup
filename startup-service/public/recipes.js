const express = require('express');
const app = express();

app.use(express.json());

let recipes = [];

app.post('/recipes', (req, res) => {
  const newRecipe = req.body;
  recipes.push(newRecipe);
  res.status(201).send('Recipe added successfully!');
});

// Route to retrieve all recipes
app.get('/recipes', (req, res) => {
    res.json(recipes);
});

// Serve your HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//store ingredients
document.getElementById("addIngredientBtn").addEventListener("click", function () {
  var ingredientsList = document.getElementById("ingredientsList");
  var ingredientCount = document.querySelectorAll(".ingredient-input").length + 1;

  var label = document.createElement("label");
  label.htmlFor = "ingredient" + ingredientCount;
  label.textContent = "Ingredient " + ingredientCount + ":";

  var input = document.createElement("input");
  input.type = "text";
  input.id = "ingredient" + ingredientCount;
  input.className = "ingredient-input";
    input.required = true;


  ingredientsList.appendChild(document.createElement("br"));
  ingredientsList.appendChild(label);
  ingredientsList.appendChild(input);
});

//recipe form data
document.getElementById("recipeForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  var name = document.getElementById("recipeName").value;
  var image = document.getElementById("recipeImage").value;

  var ingredients = [];
  var ingredientInputs = document.querySelectorAll(".ingredient-input");
  ingredientInputs.forEach(function (input) {
    ingredients.push(input.value.trim());
  });

  var directions = document.getElementById("recipeDirections").value.trim();

  recipes.push({
    name: name,
    image: image,
  });

  //update the recipes
  displayRecipes();

  // clear fields after submit
  document.getElementById("recipeName").value = "";
  document.getElementById("recipeImage").value = "";
  ingredientInputs.forEach(function (input) {
    input.value = "";
  });
  document.getElementById("recipeDirections").value = "";
  document.getElementById("recipeForm").style.display = "none";
});

// Function to toggle form visibility
document.getElementById("showFormBtn").addEventListener("click", function() {
  document.getElementById("recipeForm").style.display = "block";
});

function displayRecipes() {

  //start with example recipe
  recipes.appendChild
  
  var recipeContainer = document.getElementById("recipeContainer");

  // Clear existing content so it doesn't keep stacking
  recipeContainer.innerHTML = "";

  recipes.forEach(function (recipe) {
    var recipeDiv = document.createElement("div");
    recipeDiv.innerHTML = `
        <h2><a href="singleRecipe1.html">${recipe.name}</a></h2>
        <img src="${recipe.image}" alt="${recipe.name}">
        <p>Rating: ${recipe.rating} stars</p>
      `;
    recipeContainer.appendChild(recipeDiv);
  });
}

displayRecipes();