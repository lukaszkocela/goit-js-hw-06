const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    return alert("Wszystkie pola powinny zostać wypełnione!");
  } else console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
});
