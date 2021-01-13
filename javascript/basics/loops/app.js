// first for loop
// Print out "Da ba dee da ba daa" 6 times, using a for loop
let msg = "Da ba dee da ba daa";
for (var i = 0; i < 6; i++) {
   console.log(msg);
}

// More loop
for (let index = 25; index >= 0; index -= 5) {
   console.log(index);
}

// Iterating array exercise
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// print people in uppercase
for (let person of people) {
   console.log(person.toUpperCase());
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// print people in uppercase
for (let index in people) {
   console.log(people[index].toUpperCase());
}

// For ... of
const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// print square of values in numbers
for (let num of numbers) {
   // console.log(num**2);
   console.log(num*num);
}
