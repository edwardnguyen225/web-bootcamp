const btn2 = document.getElementById("v2");

btn2.onclick = function () {
  console.log("YOU CLICKED ME!");
  console.log("STOP CLICKING!");
};

function scream() {
  console.log("Mouse is over me...");
  console.log("Stop touching me!");
}
btn2.onmouseover = scream;

const btn3 = document.getElementById("v3");
btn3.addEventListener("click", function () {
  console.log("Me, v3, has been clicked!");
});

const btnTwistAndShout = document.getElementById("twist_and_shout");
function twist() {
  console.log("Twisting...");
}
function shout() {
  console.log("ARGHHHHHHHHHHHHHHHHHHHHHHHH!");
}
// Two lines bellow couldn't work, instead, we use addEventListener
// btnTwistAndShout.onclick = twist;
// btnTwistAndShout.onclick = shout;
btnTwistAndShout.addEventListener("click", twist);
btnTwistAndShout.addEventListener("click", shout);

// Change random color
function getRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}

function getWhite() {
  return "rgb(255, 255, 255)";
}

function setRandBackgroundColor() {
  const color = getRandomColor();
  this.style.backgroundColor = color;
  return color;
}

const btnChangeBGColor = document.getElementById("changeBGColor");
btnChangeBGColor.addEventListener("click", () => {
  const color = document.getElementById("background_color");
  color.innerText = getRandomColor();
  document.body.style.backgroundColor = color.innerText;
});

const btnResetBGColor = document.getElementById("resetBGColor");
btnResetBGColor.addEventListener("click", () => {
  const color = document.getElementById("background_color");
  color.innerText = getWhite();
  document.body.style.backgroundColor = color.innerText;
});

// Using keyword this
const div_Using_this = document.querySelector(".using_this");
for (let i = 0; i < 10; i++) {
  let btn = document.createElement("button");
  btn.className = "self_colorize";
  btn.innerText = "Try me!";
  div_Using_this.appendChild(btn);
}

function colorize() {
  this.style.backgroundColor = getRandomColor();
  this.style.color = getRandomColor();
}

const self_colorize_btns = document.querySelectorAll(".self_colorize");
for (let btn of self_colorize_btns) {
  btn.addEventListener("click", colorize);
}

// Listen to key pressing
/* window.addEventListener("keydown", function (e) {
  console.log(e.key);
  console.log(e.code);
}); */

// Form
const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweet_container");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log("Submitted!");
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;

  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(` - ${tweet}`);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  newTweet.append(deleteBtn);
  //   console.log(newTweet);

  tweetsContainer.appendChild(newTweet);
};

tweetsContainer.addEventListener("click", function (e) {
  e.target.nodeName === "BUTTON" && e.target.parentNode.remove();
  // console.dir(e.target)
});

// Input and change event
const textInput = document.querySelector("#someText");
const textResult = document.querySelector("#textResult");

textInput.addEventListener("input", function (e) {
  textResult.innerText = textInput.value;
});
