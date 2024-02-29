let recipes = [];

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
  var rating = parseFloat(document.getElementById("recipeRating").value);

  var ingredients = [];
  var ingredientInputs = document.querySelectorAll(".ingredient-input");
  ingredientInputs.forEach(function (input) {
    ingredients.push(input.value.trim());
  });

  var directions = document.getElementById("recipeDirections").value.trim();

  recipes.push({
    name: name,
    image: image,
    rating: rating
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
  document.getElementById("recipeRating").value = "";

  document.getElementById("recipeForm").style.display = "none";
});

// Function to toggle form visibility
document.getElementById("showFormBtn").addEventListener("click", function () {
  var form = document.getElementById("recipeForm");
  form.style.display = (form.style.display === "none") ? "block" : "none";
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