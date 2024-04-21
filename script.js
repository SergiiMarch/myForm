const refs = {
  form: document.getElementById("form"),
  amount: document.getElementById("amount"),
  total: document.getElementById("total"),
  price: document.getElementById("price"),
  quantity: document.getElementById("quantity"),
};

const data = {
  price: 0,
  quantity: 0,
  calcTotalPrice() {
    return Number(this.price * this.quantity.toFixed(2));
  },
};

dataFill();
displayTotal();
refs.amount.textContent = quantity.value;

refs.form.addEventListener("input", handleFormInput);

function handleFormInput({ target }) {
  if (target.name === "quantity") {
    refs.amount.textContent = target.value;
  }
  target.setAttribute("value", target.value);
  dataFill();
  displayTotal();
}

function dataFill() {
  data.price = Number(refs.price.value);
  data.quantity = Number(refs.quantity.value);
  console.log(data);
}

function displayTotal() {
  refs.total.textContent = data.calcTotalPrice() + " ua";
}
