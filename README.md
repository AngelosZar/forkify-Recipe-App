# forkify-Recipe-App

Recipe application with custom uploads

User stories

1. As a user, I want to search for recipes ,so that i can find new ideas for meals

2. As a user, I want to be able to update the number of servings ,so that i can cook a meal for different number of people.

3. As a user , I want to bookmark recipes ,so that i can review them later.

4. As a user, I want to be able to create my own recipes,so that i have all organized in the same app.

5. As a user , I want to be able to see my bookmarks and own recipes when i leave the app and come back later , so that i can close the app safely after cooking.

Breakdown.

1. - Search functionality : input field to send request to API with searched keywords.
   - Display results with pagination
   - Display recipe with cooking time, servings and ingredients

2. - Change servings functionality : Update all ingredients according to current number of servings.

3. - Bookmarking functionality : Display list of all bookmarked recipes

4. - User can upload own recipes
   - User can upload own recipes
   - User recipes will automatically be bookmarked
   - User can only see their own recipes from other users.

5. - Store bookmark data in the browser using local storage
   - On page load ,read saved bookmarks from local storage and display
