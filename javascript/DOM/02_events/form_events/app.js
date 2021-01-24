// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const productInput = form.elements.product;
  const qtyInput = form.elements.qty;
  addNewProduct(productInput.value, qtyInput.value);

  productInput.value = "";
  qtyInput.value = "";
});

const addNewProduct = (product, qty) => {
  const newProduct = document.createElement("li");
  newProduct.innerText = `${qty} ${product}`;

  const cart = document.querySelector("ul");
  cart.appendChild(newProduct);
};
