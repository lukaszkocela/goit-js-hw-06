const inputEl = document.querySelector("#font-size-control");
const outputEl = document.querySelector("#text");
inputEl.value = 15;
inputEl.addEventListener(
  "input",
  (e) => (outputEl.style.fontSize = e.currentTarget.value + "px")
);
