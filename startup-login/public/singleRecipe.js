
const recipeName = localStorage.getItem("name");

// get the recipe data of the one the user clicked on
fetch('/api/recipes') 
    .then(response => response.json())
    .then(recipes => {
        const recipe = recipes.find(singleRecipe => singleRecipe.name === recipeName);
        if (recipe) {
            // Fill in the recipe details in the HTML
            document.getElementById('recipeTitle').textContent = recipe.name;
            document.getElementById('recipeImage').setAttribute('src', recipe.image);
            document.getElementById('recipeDirections').textContent = recipe.directions;
            document.getElementById('recipeIngredients').innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
            document.getElementById('recipeRating').textContent = recipe.rating;

        } else {
            console.error('Recipe not found:', recipeName);
        }
    })
    .catch(error => console.error('Error fetching recipe:', error));

//allow the user to rate 
function rate() {
    window.location.href = "rating.html";
  }

  //show that the recipe was saved
// function save(){
//   alert("Recipe saved!");

//     fetch('/api/saved-recipes', {
//         method: 'POST', 
//         headers: {
//             'Content-Type': 'application/json', 
//         },
//         body: JSON.stringify(recipeData),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Failed to save recipe.');
//         }
//         return response.json(); 
//     })
//     .then(data => {
//         console.log('Recipe saved successfully:', data);
        
//     })
//     .catch(error => {
//         console.error('Error saving recipe:', error.message);
//     });
// }