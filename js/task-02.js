const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul#ingredients");

ingredients.forEach((ingredient) => {
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;
  liItem.classList.add("item");
  ingredientsList.append(liItem);
});
