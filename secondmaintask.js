let birthyear = Number(prompt('Enter Birht Year:'))
let birthmonth = Number(prompt('Enter Month Born:'))
let birthdate = Number(prompt('Enter day of birth:'))

let presentyear = 2026
let presentdate = 18
let presentmonth = 5

let newyear = presentyear - birthyear
let newmonth = presentmonth - birthmonth
let newdate = presentdate - birthdate

if (newdate < 0){
    newdate = newdate + 30
    newmonth = newmonth - 1
}
if (newmonth < 0){
    newmonth = newmonth + 12
    newyear = newyear - 1
}
console.log(newdate + newmonth + newyear)

let num1 = Number(prompt('Enter the first number:'))
let num2 = Number(prompt('Enter the second number:'))
let num3 = Number(prompt('Enter the third number:'))
let num4 = Number(prompt('Enter the forth number:'))


if(num1 > num2 && num1 > num3 && num1 > num4){
    console.log(num1)
}
else if(num2 > num1 && num2 > num3 && num2 > num4){
    console.log(num2)
}
else if(num3 > num2 && num3 > num1 && num3 > num4){
    console.log(num3)
}
else{
    console.log(num4)
}

let email = "admin@gmail.com"
let password = "Admin@123"

let tries = 1
while (tries <= 3){
    let emailinput = prompt('Enter email address:') 
    let passwordinput = prompt('Enter password:')
if( emailinput == email && passwordinput == password){
    console.log('Login Successful')
    break
}
    else{
        console.log('Invalid usename or password')
    }
    tries = tries + 1

    if (tries > 3){
        console.log('You have been blocked')
    }
}

let correct = false

while(correct == false){

let num5 = Number(prompt('Enter first number:'))
let num6 = Number(prompt('Enter second number:'))



}g
