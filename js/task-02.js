const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newArray = ingredients.map(ingredient => {

  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.className = "item";

  return listItem

  })

document.getElementById('ingredients').append(...newArray)