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