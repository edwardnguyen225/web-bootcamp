// lotto numbers exercise
let lottoNumbers = new Array(6);
for (let i in lottoNumbers) {
   lottoNumbers[i] = Math.random();
}
console.log(lottoNumbers);

// Array access
const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:
leaderboard[1] = "Luna";
leaderboard[3] = "Draco";
console.log(leaderboard);
// expected output: ["Harry","Luna","Hermione","Draco"]

// push/pop/shift/unshift
const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");
console.log(planets);
// expected output: ["Mercury","Venus","Earth","Mars","Jupiter","Saturn"]

planets.slice(4, 2);

// nested array
// DO NOT TOUCH!!! (please)
const airplaneSeats = [
   ['Ruth', 'Anthony', 'Stevie'],
   ['Amelia', 'Pedro', 'Maya'],
   ['Xavier', 'Ananya', 'Luis'],
   ['Luke', null, 'Deniz'],
   ['Rin', 'Sakura', 'Francisco']
];

// YOUR CODE GOES BELOW THIS LINE:
airplaneSeats[3][1] = "Hugo";
console.log(airplanets);