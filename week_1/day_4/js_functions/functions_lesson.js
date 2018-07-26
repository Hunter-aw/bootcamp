// const greet = function (name) {
//     console.log("hello " + name);
// }
// greet()

//Exercise 1
// const convertWeight = function(weight, unit) {
//     if (unit === "kilos") {
//         return weight * 2.2;
//     } else if(typeof unit !== "string"){
//         return "please input the proper units"
//     } else {
//         return weight / 2.2
//     }
// };
// console.log(convertWeight(165, "kilos"))


//Exercise 2
// const calcAge = function (birthYear) {
//     x = ((new Date()).getFullYear()) - birthYear
//     y = x + 1
//     return "you are either " + x + " or " + y
// }
// let age = calcAge(1989)
// console.log(age)


//Exercise 3
// const isPrime = function (number) {
//     let x = number - 1
//     while (x > 1) {
//         if (number % x !== 0) {
//             x--
//         } else if (number % x === 0) {
//             return "This is not a prime number"
//         }
//     }
//     return "This is a prime number"
// }
// console.log(isPrime(12))


//Exercise 4
// const average = function(numbers) {
//     let avg = 0
//     for (x of numbers) {
//         avg += x;
//     }
//     return avg / (numbers.length)
// }
// console.log(average ([1, 2, 3, 4, 5, 6]))

//Exercise 5
// const match = function(array, number) {
//     for (x of array) {
//         if (x === number) {
//             return "We have a match!"
//         }
//     }
//     return "no match"
// }
// console.log(match([1, 2, 3, 4, 5, 6, 7], 5))


//Exercise 6
const smallerThan = function (array, number) {
    let string = ""
    for (x of array) {
        if (x < number) {
            string = string + x + " "
        }
    }
    if (string === "") {
        return "Your number is to small. Sad!"
    }
    return string
}
console.log(smallerThan([12, 13, 41, 22, 5], 20))