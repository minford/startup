 
 // Recipe form data
document.getElementById("ratingForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the rating value from the form
  const recipeRating = parseFloat(document.getElementById("recipeRating").value);

  // Push the rating into the ratings array of the selected recipe
  const selectedRecipeIndex = 0; // Replace 0 with the index of the selected recipe
  recipes[selectedRecipeIndex].ratings.push(recipeRating);

  // Clear the form fields after submit
  document.getElementById("recipeRating").value = "";

  // Call the rate function to update the displayed recipes
  rate();
});


function rate() {
  var recipeContainer = document.getElementById("recipeContainer");

  // Clear existing content
  recipeContainer.innerHTML = "";

  recipes.forEach(function (recipe) {
      var totalRating = recipe.ratings.reduce((acc, curr) => acc + curr, 0);
      var averageRating = totalRating / recipe.ratings.length || 0;

      var recipeDiv = document.createElement("div");
      recipeDiv.innerHTML = `
          <h2><a href="singleRecipe1.html">${recipe.name}</a></h2>
          <img src="${recipe.image}" alt="${recipe.name}">
          <p>Average Rating: ${averageRating.toFixed(1)} stars</p>
      `;
      recipeContainer.appendChild(recipeDiv);
  });
}


rate();