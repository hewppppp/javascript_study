let number = Number(prompt('Enter number:'))

let result = number % 2 == 0 ? 'Even Number': 'Odd Number'

console.log(result)

let num1 = Number(prompt('Enter first number:'))

let num2 = Number(prompt('Enter second number:'))

let num3 = Number(prompt('Enter third number:'))

let largest =
num1 > num2 && num1 > num3 ? num1 :
num2 > num1 && num2 > num3 ? num2 :
num3
console.log(largest)

let year = Number(prompt('Enter year:'))




let temperature = Number(prompt('Enter temperature :'))

let result1 = 
temperature > 30 ? 'The temperature is too high':

temperature > 15 ? 'Normal temperature' :
'Cold Temperature'
console.log(result1)

let x = Number(prompt('Enter x:'))
let y = Number(prompt('Enter y:'))

let result2 =
x >= 10 && x <= 20 && y > 100 ?
'Conditions met' 
:'Conditions not met'
console.log(result2)

let password = Number(prompt('Enter password:'))

let passwordresult = 
password === "secret123"
? 'Access Granted'
: 'Access Denied'
console.log(passwordresult)

let score = Number(prompt('Enter Student Score:'))
let attendance = Number(prompt('Enter Attendance score:'))

let studentresult = 
score > 80 && attendance > 80 ?
'Excellent Student'
:'Good score, but attendance needs improvement'
console.log(studentresult)

