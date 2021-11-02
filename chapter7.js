// Chapter 7 Exercise

//Musketeers: Write a program based on the following instructions.
//Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
const musketeers = ['Athos', 'Porthos', 'Aramis'];
//Shows each array element using a for loop.
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}
//Adds the "D'Artagnan" value to the array.
musketeers.push("D'Artagnan");
//Shows each array element using the forEach() method.
musketeers.forEach(musketeer => {
  console.log(musketeer);
});
//Remove poor Aramis.
musketeers.splice(2,1);
//Shows each array element using a for-of loop.
for (const musketeer of musketeers) {
  console.log(musketeer);
}


// Sum of values: Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
const values = [3, 11, 7, 2, 9, 10];
const sum = values[0] + values[1] + values[2] + values[3] + values[4] + values[5];
console.log (sum);
