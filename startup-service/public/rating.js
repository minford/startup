
// Recipe form data
document.getElementById("ratingForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get the rating value from the form
  const recipeRating = parseFloat(document.getElementById("recipeRating").value);
  fetch('/api/recipes/rate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      recipeName: document.getElementById('recipeTitle').textContent,
      rating: recipeRating
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Rating submitted successfully:', data);
  })
  .catch(error => console.error('Error submitting rating:', error));

  document.getElementById("recipeRating").value = "";
});

//show recipe data on ratings page
function loadRecipeDetails(recipeName) {
  fetch(`/api/recipes/${recipeName}`)
  .then(response => response.json())
  .then(recipe => {
    document.getElementById('recipeTitle').textContent = recipe.name;
    document.getElementById('recipeImage').setAttribute('src', recipe.image);
  })
  .catch(error => console.error('Error fetching recipe details:', error));
}

// Load recipe details when the page loads
window.onload = function() {
  const recipeName = document.getElementById('recipeTitle').textContent;
  loadRecipeDetails(recipeName);
};

//allow user to rate
function rate(recipeName) {
  var recipeContainer = document.getElementById("recipeContainer");
  fetch('/api/recipes') 
    .then(response => response.json())
    .then(recipes => {
      const recipe = recipes.find(recipe => recipe.name === recipeName);
      if (recipe) {
        document.getElementById('recipeTitle').textContent = recipe.name;
        document.getElementById('recipeImage').setAttribute('src', recipe.image);

        const totalRating = recipe.ratings.reduce((acc, curr) => acc + curr, 0);
        const averageRating = totalRating / (recipe.ratings.length || 1); // Prevent division by zero
        document.getElementById('recipeRating').textContent = `Average Rating: ${averageRating.toFixed(1)} stars`;

      } else {
        console.error('Recipe not found:', recipeName);
      }
    })
    .catch(error => console.error('Error fetching recipe:', error));

  recipeContainer.innerHTML = "";

  //get average ratings for each recipe
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


rate(document.getElementById('recipeTitle').textContent);