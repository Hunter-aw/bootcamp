var nums = [12, 4, 2, 1, 26, 1, 25, -1, 15, 16, 21]

// ........................find sum
// let sum = 0
// for (let i of nums) {
//     sum += i;
// }
// console.log(sum)

// ........................find smallest number

// let small = nums[0]
// for (let i of nums) {
//     if (i < small) {
//         small = i;
//     }
// }
// console.log(small)

// .........................find most frequent

// let frequent = 0
// let currentHighest = 0
// for (let i of nums) {
//     let frequency = 0
//     for (let x of nums) {
//         if (i === x) {frequency ++}
//     }
//     if (frequency >frequent) {
//         frequent = frequency;
//         currentHighest = i
//     } 
// }
// console.log(currentHighest)

// ...........................fibonacci sequence

let fib = [1,1,2,3,5,8,13,21]

// let lastNum = fib[fib.length-1]
// let prevNum = fib[fib.length-2]
// fib.push(lastNum+prevNum)
// console.log(fib[fib.length-1])

let findFibonacci = (i) => {
    console.log(fib[i-1])
}
findFibonacci(6)
