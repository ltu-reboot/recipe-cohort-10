/*
  Create an OBJECT to hold information for our favourite recipe

  ARRAY is equal to a list of items

  OBJECT
    RECIPETITLE = String
    SERVINGS = Number
    INGREDIENTS = Array of Strings
    DIRECTIONS = Array of Strings

  let favouriteRecipe = {
    recipeTitle = '',
    servings = 6,
    ingredients = [ '1', '2', '3'],
    directions = ['step 1', 'step 2']
  }

  to loop over ingredients
  FOR
    COUNTER = 0
    CONDITION = COUNTER < INGREDIENTS.LENGTH
    COUNTER + 1

  for( let counter = 0; counter < ingredients.length; counter++ )
  
*/

let favouriteRecipe = {
    recipeTitle : 'Spaghetti Bolognese',
    servings : 6,
    ingredients : [ 
      '1 tbsp olive oil', 
      '4 rashers smoked streaky bacon', 
      '2 medium onions',
      '2 carrots',
      '2 celery sticks',
      '2 garlic cloves',
      '2-3 springs rosemary',
      '500g beef mince'
    ],
    directions : [
      '1',
      '2',
      '3'
    ]
  }

let ingredients = favouriteRecipe.ingredients;
let directions = favouriteRecipe.directions;

for( let counter = 0; counter < ingredients.length; counter++ ) {

  console.log( ingredients[counter] );
}

for( let counter = 0; counter < directions.length; counter++ ) {

  console.log( directions[counter] );
}