// Get recipe name from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const recipeName = urlParams.get('recipeName');

// Fetch the recipe details from recipes.js based on the recipe name
fetch('/api/recipes') // Assuming your API endpoint to fetch recipes is '/api/recipes'
    .then(response => response.json())
    .then(recipes => {
        const recipe = recipes.find(recipe => recipe.name === recipeName);
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

function rate() {
    window.location.href = "rating.html";
  }
function save(){
  alert("Recipe saved!");

    // Send a fetch request to save the recipe
    fetch('save_recipe_endpoint', {
        method: 'POST', // You might want to use POST method to send the recipe data
        headers: {
            'Content-Type': 'application/json', // Specify the content type of the request body
        },
        body: JSON.stringify({
            recipeName: 'Sweet Avocado', // Example recipe name
            // Add more data as needed
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to save recipe.');
        }
        return response.json(); // Assuming the server responds with JSON data
    })
    .then(data => {
        console.log('Recipe saved successfully:', data);
        // You can perform additional actions here if needed
    })
    .catch(error => {
        console.error('Error saving recipe:', error.message);
    });
}