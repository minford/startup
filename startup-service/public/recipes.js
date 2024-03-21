
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
    
  //store directions
    var directions = document.getElementById("recipeDirections").value.trim();
  
  //data to show on recipes page
  var recipeData = {
    name: name,
    image: image
  };

  // Make a POST request to add a new recipe
  fetch('/api/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipeData)
  })
    .then(response => response.json())
    .then(recipes => {
      displayRecipes();
      document.getElementById("recipeName").value = "";
      document.getElementById("recipeImage").value = "";
      document.querySelectorAll(".ingredient-input").forEach(input => input.value = "");
      document.getElementById("recipeDirections").value = "";
      document.getElementById("recipeForm").style.display = "none";
    })
    .catch(error => console.error('Error:', error));
});

// Function to toggle form visibility
document.getElementById("showFormBtn").addEventListener("click", function () {
  document.getElementById("recipeForm").style.display = "block";
});

//show all recipes from all users
function displayRecipes() {
  fetch('/api/recipes')
    .then(response => response.json())
    .then(recipes => {
      var recipeContainer = document.getElementById("recipeContainer");
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
    })
    .catch(error => console.error('Error:', error));

}

//show the user's saved recipes
function displaySavedRecipes() {
  fetch('/api/saved-recipes')
    .then(response => response.json())
    .then(savedRecipes => {
      var savedRecipeContainer = document.getElementById("savedRecipeContainer");
      savedRecipeContainer.innerHTML = ""; 

      savedRecipes.forEach(function (recipe) {
        var recipeDiv = document.createElement("div");
        recipeDiv.innerHTML = `
          <h2><a href="singleRecipe1.html">${recipe.name}</a></h2>
          <img src="${recipe.image}" alt="${recipe.name}">
          <p>Rating: ${recipe.rating} stars</p>
        `;
        recipeContainer.appendChild(recipeDiv);
      });
    })
    .catch(error => console.error('Error:', error));
}

// Add event listener for the saved recipes button
document.getElementById("savedRecipesBtn").addEventListener("click", function () {
  displaySavedRecipes();
});

displayRecipes();