const arr = [1,6,3,3,5,6,8,4,3,4,4,3]

for (let i in arr) {
    let y = [i]
    let x = i+1
    if (arr[x]<arr[i]) {
        arr.unshift(x)
        arr.splice(x,1)
    }
    console.log(arr)
}