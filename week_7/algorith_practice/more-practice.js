// var array = ["first", "second", "third" , "last"]
// var confirm = confirm("do you want to continue?")
// for (i of array) {
//     console.log(i)
//     if (!confirm) {
//         return;
//     }
// }

// ...................................Swap 2 number variables without using a temp
// let a = 10
// let b = 20

// a = a+b
// b = a-b
// a = a-b
// console.log(`a is ${a}, and b is ${b}`)

// .....................................Swap 2 string variables without using a temp
// let a = 'hunter'
// let b = 'jona'

// a = a+b
// b = a.substr(0, a.length-b.length)
// a = a.slice(b.length)
// console.log(a, b)

// 

// let x = Math.floor(Math.random() * 10)

// const stars = (x) => {
//     let string = ""
//     let start = 0
//     while (start < x) {
//         string = "*"
//         console.log(string)
//         start++
//     }
// }

// stars(x)

// ......................................reverse
// let x = Math.floor(Math.random() * 10)

// const stars = (x) => {
//     let string = ""
//     let end = 0
//     while (x > end) {
//         string = "*"
//         console.log(string.repeat(x))
//         x--
//     }
// }

// stars(x)


// ..............................Reverse a string

// function reverse(str){
    
//     var reversed = ""
//     let i = str.length -1
//     while(i >= 0) {
//     reversed += str[i]
//     i-- 
//     }
//     console.log(reversed)
//   }
  
//   reverse("dog") //should return "god"
//   reverse("race car") //should return "rac ecar"

// .................................. Palindrome
// function reverse (str) {
//     let reversed = ""
//     let i = str.length -1
//     while(i >= 0) {
//         reversed += str[i]
//         i-- 
//     }
//     return reversed;
// }

// function palindrome(str){
//     if (str === reverse(str))
//         {console.log(true)}
//     else {console.log(false)}
//   }

// palindrome("dog") //should return "god"
// palindrome("racecar") //should return "rac ecar"

// ........................................Simple Cipher O.o
// let simpleCipher = (str) => {
//     let cipheredStr = ""
//     let i = 0
//     while (i < str.length) {
//         let charCode = str.charCodeAt(i)
//         cipheredStr += String.fromCharCode(charCode+1)
//         i++ 
//     }
//     console.log(cipheredStr)
// }

// simpleCipher("hunter")

// .......................................Simple Decrypt

// let simpleDecrypt = (str) => {
//     let decryptStr = ""
//     let i = 0
//     while (i < str.length) {
//         let charCode = str.charCodeAt(i)
//         decryptStr += String.fromCharCode(charCode-1)
//         i++ 
//     }
//     console.log(decryptStr)
// }

// simpleDecrypt("ivoufs")

// .........................................Cab Sipher

// let cabCipher = (str) => {
//     let cipherStr = ""
//     let i = 0
//     while (i < str.length) {
//         let charCode = str.charCodeAt(i)
//         let cabCode = "cab".charCodeAt(i)
//         if (i > 2) {cabCode = "cab".charCodeAt(i-3)}
//         console.log(cabCode)
//         cipherStr += String.fromCharCode(charCode + cabCode)
//         i++
//     }
//     console.log(cipherStr)
// } 
// cabCipher("hunter")
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>todo: this isn'y perfect, work on it<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//............................Remove Duplicates
// let array = ["dog", "cat", "camel", "bee", "dog", "elephant", "dolphin"]
// let existing = {}

// for (let i in array) {
//     if (existing[array[i]]) {
//         array.splice(i, 1)
//     } else  existing[array[i]] = true
// }
// console.log(array)

// .................................................Jumbled............

// var colors = ["red", "indigo", "white", "teal", "yellow"];
// var foods = ["bread", "cheese", "cucumber"];

// function jumble(arr1, arr2){
    
//   var jumbledArr = []
//   let iTotal = arr1.length + arr2.length
//   let i = 0;
//   let x = 0;
//   while (jumbledArr.length < iTotal) {
//       let random = Math.floor(Math.random()* 2)
//       if (random === 0 && (i < arr1.length)) {
//         jumbledArr.push(arr1[i])
//         i++
//       } else if (random === 1 && (x < arr2.length)) {
//         jumbledArr.push(arr2[x])
//         x ++
//       }
//   }
//   console.log(jumbledArr)
//   return jumbledArr
// }

// jumble(colors, foods) // could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]

// ..................................Sorting Array

let array = [6, 4, 2, 8, 21, 3]
let smallest = array[0]
let smallArray = []
let largeArray = []
let sortedArray = []

for (let i of array) {
    if (i < smallest) {
        smallArray.unshift(i)
        smallest = i
    } else if (i > smallArray[smallArray.length-1] && i<largeArray[0]) {        
        largeArray.unshift(i)
    } else largeArray.push(i)
}
sortedArray  = smallArray.concat(largeArray)
console.log(sortedArray)