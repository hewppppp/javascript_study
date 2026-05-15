let arr1 = [1,2,3]

let arr2 = [4,5,6]

let array = arr1.concat(arr2)

array.shift()

console.log(array)

let sourceArray = ['apples', 'bananas','cherries', 'watermelons', 'oranges', 'grapefruits']

let extractedarray =sourceArray.slice(2,5)
 
extractedarray.splice(0,3,'x','y','z')

let num1 = [1,2,3]

let num2 = [4,5,6]

let combined = num1.concat(num1)

console.log(combined)

let combined2 =[...num1,...num2]

console.log(combined2)