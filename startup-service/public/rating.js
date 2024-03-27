
const recipeName = localStorage.getItem("name");

function calculateRating(ratings) {
  const totalRating = ratings.reduce((acc, curr) => acc + curr, 0);
  const averageRating = totalRating / (recipe.ratings.length || 1); // Prevent division by zero

}

// get the recipe data of the one the user clicked on
//display title and image
fetch('/api/recipes')
  .then(response => response.json())
  .then(recipes => {
    const recipe = recipes.find(singleRecipe => singleRecipe.name === recipeName);
    if (recipe) {
      // Fill in the recipe details in the HTML
      document.getElementById('recipeTitle').textContent = recipe.name;
      document.getElementById('recipeImage').setAttribute('src', recipe.image);
      //const avgRating = calculateRating(recipe.ratings);
      // document.getElementById('recipeRating').textContent = `Average Rating: ${averageRating.toFixed(1)} stars`;


      //document.getElementById('recipeRating').textContent = recipe.rating;

    } else {
      console.error('Recipe not found:', recipeName);
    }
  })
  .catch(error => console.error('Error fetching recipe:', error));


// Recipe form data
function addRating(event){
  // document.getElementById("ratingForm").addEventListener("submit", function (event) {
  //   event.preventDefault(); // Prevent form submission
  
    fetch('/api/recipes')
      .then(response => response.json())
      .then(recipes => {
        const recipe = recipes.find(singleRecipe => singleRecipe.name === recipeName);
        if (recipe) {
         
          // Get the rating value from the form
          //const recipeRating = document.getElementByName("recipeRating").value;
          const recipeRating = event.target.elements.recipeRating.value;

          //console.log(recipeRating);

          let recipeData = {
            recipeName: recipe.name, // Send the recipe name
            rating: recipeRating // Send the rating
          }
          //console.log(recipe.name);
          //console.log(recipeRating);
          fetch('/api/rate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipeData)
          })
            .then(response => response.json())
            .then(data => {
              console.log('Rating submitted successfully:', data);
            })
            .catch(error => console.error('Error submitting rating:', error));
        } else {
          console.error('Recipe not found:', recipeName);
        }
      })
      .catch(error => console.error('Error fetching recipe:', error));
  
   //document.getElementById("recipeRating").value = "";
}


//work on fixing this page, rudece function not getting anything