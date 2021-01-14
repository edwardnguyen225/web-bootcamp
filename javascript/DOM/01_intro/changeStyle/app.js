// Forest
let container = document.getElementById("container");
container.style.textAlign = "center";

let image = document.querySelector("img");
image.style.width = "150px";
image.style.borderRadius = "50%";

// Rainbow
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

let rainbowText = document.querySelectorAll("span");
for (let index in rainbowText) {
  rainbowText[index].style.color = colors[index];
}
