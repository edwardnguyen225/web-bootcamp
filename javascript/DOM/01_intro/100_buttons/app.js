// WRITE YOUR CODE IN HERE:
let container = document.querySelector("div");
for (let i = 0; i < 100; i++) {
  let btn = document.createElement("button");
  btn.innerText = "Click me!";
  container.appendChild(btn);
}
