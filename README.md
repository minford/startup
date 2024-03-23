# Startup - Lavocado
Startup application for BYU CS 260

## Specification Deliverable

### Elevator Pitch
We've seen avocado toast and avocado in sushi, some people even make avocado brownies. What else can avocado be paired with?? The possibilities are endless! *Lavocado* explores the versitility of avocado by allowing users all over the world to share how they eat avocado. Users can share their recipes and pairings with avocados. Then, others can rate the recipe if they try it as well. We can all share our love for avocados together on *Lavocado*!

### Design
![Login Page](https://github.com/minford/startup/blob/61d6503f3d2ae2c237541a842bd1ad3438423b77/Login%20Design.png)

![Page to show recipes](https://github.com/minford/startup/blob/e515f7c16df5ee9747592a81f63d96abd03749f8/All%20Recipes%20Design.png)

![Rate individual recipes page](https://github.com/minford/startup/blob/e515f7c16df5ee9747592a81f63d96abd03749f8/Rate%20Recipe%20Design.png)



### Key Features
- Secure login
- See top rated recipes
- Display all recipes
- Select a recipe and give it a rating
- Favorite/save recipes
- Create or delete your own uploaded recipes

### Technologies
The required technologies will be used in the following ways:
- HTML - Multiple HTML pages will structure the application including a login page, all recipes page, and a selected recipe page where users can rate the recipe if desired.
- CSS - Styling of the application, adding color and using desired spacing of recipes
- JavaScript - Allows users to post recipes, vote on recipes, and login.
- Service - Web service for logging in, retreiving and posting recipes and ratings
- Database/Login - Stores each user's Authentication information, also stores all recipes
- WebSocket - Users can see new recipes in real time and the ratings for each recipe will be updated in real time as well.
- React - The application will use React Web framework for routing.


## HTML Deliverable
- HTML pages - Three HTML pages represent logging in, finding recipes, choosing 1 recipe.
- Links - The login page links to the page with all the recipes. It also links to github. The recipes page can link to a single recipe or logout back to the login page.
- Text - Each recipe includes the name, image, ingredients, directions, and a rating.
- Images - There is an image for each recipe, as well as the logo.
- DB/Login - Input boxes for username and password and Login button to submit. 
- WebSocket - The ranking of each recipe will be updated in real-time based on all users.

## CSS Deliverable
- Header, footer, and main content body - kept consistent formatting for each page
- Navigation elements - Put at the top left corner for each page, underlined to show link
- Responsive to window resizing - Colors fill spaces no matter the size to accommodate all window sizes
- Application elements - Added colors and centered a lot of elements
- Application text content - Used the same font (Arial) also tried to keep sizing consistent for each text element
- Application images - Image placeholders are in the right spots, the logo image is smaller and fits in header

## Javascript Deliverable
For this deliverable, I implemented some javascript elements so users could add recipes to the recipes page and created placeholders for future technologies
 - Login - When a user presses login, they are "signed in" and redirected to the recipes page
 - Database - Each recipe a user inputs is stored in a database. There are still adjustments needed to be made, especially with the ingredients list and accessing each recipe.
 - WebSocket - as each user inputs recipes, they will show up for everyone so users can share recipes with each other
 - Application Logic - Users can login, add recipes, view recipes - the ranking still needs to be worked on

## Service deliverable
For this deliverable I added backend endpoints that keep track of all the recipes users input and display them.

- Node.js/Express HTTP service - updated and added .js files to do this
- Static middleware for frontend - updated .js files to do this
- Calls to third party endpoints - I display quotes on the login page
- Backend service endpoints - Placeholders to keep track of a users login info to keep track of the user. Endpoints for rating and displaying recipes.
- Frontend calls service endpoints - I use the fetch function to keep the service updated.

##DB/Login deliverable
For this deliverable I tried to connect the recipes that a user inputs with the logged in user.

MongoDB Atlas database created - done!
Stores data in MongoDB - done!
User registration - Creates a new account in the database.
Existing user - Stores the user's recipes (for some reason the recipes are getting lost)
Use MongoDB to store credentials - Stores both user and their recipes. (also still working on this)
Restricts functionality - You can only rate recipes after signing in. 😔
