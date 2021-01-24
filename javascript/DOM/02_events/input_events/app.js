const h1 = document.querySelector("h1");
const textInput = document.querySelector("input");
const msg = "Enter Your Username";

textInput.addEventListener("input", function (e) {
  if (textInput.value === "") {
    h1.innerText = msg;
    return;
  }
  h1.innerHTML = welcomeTxt(textInput.value);
});

function welcomeTxt(name) {
  return `Welcome, ${name}`;
}
