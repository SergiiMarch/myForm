const refs = {
  form: document.getElementById("form"),
  amount: document.getElementById("amount"),
  total: document.getElementById("total"),
};

refs.form.addEventListener("input", handleFormInput);

function handleFormInput(e) {
  console.log(e.target);
}
