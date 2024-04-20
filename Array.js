var arr = [101, "Vicky", {city : "Delhi"}]

console.log(arr)
console.log(typeof(arr))    //object

//Insert element in the last position
arr.push("Byee")
console.log(arr)

//Insert element in the first position
arr.unshift("Hello")
console.log(arr)

//delete element from the last position
arr.pop()
console.log(arr)

//delete element from the first position
arr.shift()
console.log(arr)
