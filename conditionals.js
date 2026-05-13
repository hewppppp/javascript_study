
let y = Number(prompt('Enter a number:'))

if (y%2==0){
    console.log('Even number')
}else{
    console.log('Odd number')
}

let num1 = Number(prompt('Enter first number:'))
let num2 = Number(prompt('Enter second number:'))
let num3 = Number(prompt('Enter third number:'))

if((num1 > num2) && (num1 > num3)){
    console.log("num1 is the largest")
}else if((num2 > num1) && (num2 > num3)){
    console.log("num2 is the largest")
}else{
    console.log("num3 is the largest")
}

let age = 20
if(age >= 18){
    console.log('Eligible to vote')
}

let username = 'hope123'
if (username.length < 8){
    console.log('Too short')
}else{
    console.log('Correct format')
}
let customer_age = 15
if(age < 12){
    console.log('500/=')
}else if(age < 18){
    console.log('650/=')
}else if(age > 60){
    console.log('400/=')
}else{
    console.log('800/=')
}