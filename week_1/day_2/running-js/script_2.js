// fizzbuzz challenge

/* 
let fizzBuzzVar = 0

while (fizzBuzzVar <= 20) {
    fizzBuzzVar = fizzBuzzVar + 1;
    if ((fizzBuzzVar % 5 === 0) && (fizzBuzzVar % 3 === 0)) {
        console.log("fizzbuzz")
    } else if (fizzBuzzVar % 5 === 0) {
        console.log("fizz")
    } else if (fizzBuzzVar % 3 === 0) {
        console.log("buzz")
    } else {
        console.log(fizzBuzzVar)
    }
} 
*/

//partner exercise 1

/* 
let restaurants = ["Mcdonalds", "Burger King", "Arbys", "White Castle", "Wendys", "Dairy Queen"]

for(let part of restaurants) {
    console.log(part)
} 
*/

//partner exercise 2

/* 
const numbers = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62]
let sum = 0
for(let eachNumber of numbers) {
    sum = eachNumber + sum
}
console.log(sum)
 */

//partner exercise 3
/*
const myColor = ["Red", "Green", "White", "Black"];
let string = ""
for (let color of myColor) {
    string = string + " + " + color; 
    // console.log(string);
}
console.log(string)
*/

//Partner exercise 4

/*
let string = "0254687193";
let newString = "";
let n = -1

for (number of string) {
    newString += number
    n++
    if ((number % 2 === 0) && (string[n + 1] % 2 === 0)) {
        newString += "-";
    }
}
console.log(newString)
*/

//Extension Exercise 1

const array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// for (string in array)