function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy");
const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input[type='number']");

createButton.addEventListener("click", () => createBoxes(inputEl.value));
destroyButton.addEventListener("click", () => {
  destroyBoxes();
  boxesEl.innerHTML = "";
});

const createBoxes = (quantity) => {
  for (let i = 0; i < quantity; i++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;
    newBox.style.background = getRandomHexColor();
    newBox.style.margin = "5px";
    boxesEl.append(newBox);
  }
};

const destroyBoxes = () => {
  boxesEl.innerHTML = "";
};
