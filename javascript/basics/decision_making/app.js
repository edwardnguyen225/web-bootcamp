function isEven(num) {
   if (num % 2 == 0) {
      console.log("even");
      return true;
   }
   return false;
}

function getColor(phrase) {
   if (phrase == "stop") {
      console.log("red");
   } else if (phrase == "slow") {
      console.log("yellow");
   } else if (phrase == "go") {
      console.log("green");
   } else {
      console.log("purple");
   }
}.