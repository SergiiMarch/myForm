const refs = {
  form: document.getElementById("form"),
  amount: document.getElementById("amount"),
  total: document.getElementById("total"),
};

refs.form.addEventListener("input", handleFormInput);

function handleFormInput({ target }) {
  if (target.name === "quantity") {
    console.log(quantity.value);
    amount.textContent = quantity.value;
  }
}
