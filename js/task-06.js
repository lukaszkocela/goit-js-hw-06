const inputEl = document.getElementById("validation-input");
const inputLength = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", (event) => {
  let sub = event.currentTarget.value.length;
  if (sub == inputLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
