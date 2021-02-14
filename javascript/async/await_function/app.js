const delayColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      // console.log(`Change background color to: ${color}`);
      resolve();
    }, delay);
  });
};

async function rainbow() {
  await delayColorChange("red", 1000);
  await delayColorChange("orange", 1000);
  await delayColorChange("yellow", 1000);
  await delayColorChange("green", 1000);
  await delayColorChange("blue", 1000);
  await delayColorChange("purple", 1000);
  return "All done";
}

rainbow().then((response) => {
  console.log(response);
  console.log("YAY, IT WORKED!!!");
});
