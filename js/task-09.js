function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const txtEl = document.querySelector(".color");

btnEl.addEventListener("click", () => {
  const selectedColor = getRandomHexColor();
  document.body.style.backgroundColor = selectedColor;
  txtEl.textContent = selectedColor;
});
