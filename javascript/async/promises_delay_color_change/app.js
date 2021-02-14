const delayColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      console.log(`Change background color to: ${color}`);
      resolve();
    }, delay);
  });
};

delayColorChange("red", 1000)
  .then(() => delayColorChange("orange", 1000))
  .then(() => delayColorChange("yellow", 1000))
  .then(() => delayColorChange("green", 1000))
  .then(() => delayColorChange("blue", 1000))
  .then(() => delayColorChange("purple", 1000));
