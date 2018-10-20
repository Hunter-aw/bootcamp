const arr1 = [1,6,3,3,5,6,8,4,3,4,4,3]
const arr2 = [1, 36, 9, 9, 25, 36, 64, 16, 16, 16, 9, 9]

// for (let i of arr) {
//     for (let i in arr) {
//         let x = parseInt(i, 10)+1
//         if (arr[x]<arr[i]) {
//             arr.splice(i, 0, arr[x])
//             arr.splice(x+1,1)
//         }
//     }
//     console.log(arr)
// }

// for(let i in arr) {
//     let half = Math.floor(arr.length/2)
//     let newArr = [...arr]
//     let arr1 = newArr.splice(0,half)
//     let arr2 = arr.splice(half,half)
//     console.log(arr1)
// }
// miniSort = (master, i, x) => { 
//     if (master[x]) {
//     let combined = master[i].concat(master[x])
//     for (i in combined){
//         let x = parseInt(i, 10)+1
//         if (combined[x]<combined[i]) {
//             combined.splice(i, 0, combined[x])
//             combined.splice(x+1,1)
//         }
//     } 
//     return combined
//     }
// }

// mergeSort = () => {
//     let master = arr.map(num => [num])
//     let newMaster = []
//     for (let i in master) {miniSort = (master, i, x) => { 
//     if (master[x]) {
//     let combined = master[i].concat(master[x])
//     for (i in combined){
//         let x = parseInt(i, 10)+1
//         if (combined[x]<combined[i]) {
//             combined.splice(i, 0, combined[x])
//             combined.splice(x+1,1)
//         }
//     } 
//     return combined
//     }
// }

// mergeSort = () => {
//     let master = arr.map(num => [num])
//     let newMaster = []
//     for (let i in master) {
//         let x = parseInt(i, 10)+1
//         let combined = miniSort(master, i, x)
//         newMaster.concat(combined)
//     }
//     console.log(master)
// }
//         let x = parseInt(i, 10)+1
//         let combined = miniSort(master, i, x)
//         newMaster.concat(combined)
//     }
//     console.log(master)
// }
const heapSort = (array) => {
    if (array.length > 1) {
        let temp = array.splice(0,1)
        console.log(array)
        heapSort(array)
        let i = 0
        while (array[i] < temp[0]) {
            i++
        }
        array.splice(i, 0, temp[0])
        console.log(array)
    }
    return;

}

// heapSort(arr1)

const mergeSort = (array) => {
    const half = Math.floor(array.length/2)
    
    if (ray1.length === 0 || ray2.length === 0) {
        return;
    }
    const ray1 = array.slice(0, half)
    const ray2 = array.slice(half, array.length-1)

    const rayray1 = mergeSort(ray1)
    const rayray2 = mergeSort(ray2)

    const mergedArray = []
    while(mergedArray.length < array.length) {
        
    }
}

mergeSort(arr1)