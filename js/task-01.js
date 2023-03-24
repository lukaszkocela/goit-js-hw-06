const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const catName = category.querySelector("h2");
  const catElements = category.querySelectorAll("li");

  console.log(`Category: ${catName.textContent}`);
  console.log(`Elements: ${catElements.length}`);
});
