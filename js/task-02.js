const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 


const allIngredients = document.querySelector('#ingredients')

const liOfIngredients = [];


ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredient;
  liOfIngredients.push(item);
  console.log(item)
});


allIngredients.append(...liOfIngredients);