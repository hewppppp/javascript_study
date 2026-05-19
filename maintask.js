let base = Number(prompt("Enter base"))
let height = Number(prompt("Enter height"))

let area = 0.5 * base * height

console.log(area)

let number = Number(prompt("Enter a number"))

let result = number % 2 == 0 ? "Even" : "Odd"

console.log(result)

if (number % 4 == 0) {
    console.log("Divisible by 4")
}

let phone = prompt("Enter phone number")

if (phone.startsWith("07")) {
    phone = "+254" + phone.slice(1)
}
else if (phone.startsWith("01")) {
    phone = "+254" + phone.slice(1)
}
else if (phone.startsWith("7")) {
    phone = "+254" + phone
}
else if (phone.startsWith("1")) {
    phone = "+254" + phone
}
else if (phone.startsWith("254")) {
    phone = "+" + phone
}

console.log(phone)

let email = prompt("Enter email")

let result =
email.includes("@") && email.includes(".")
? "Valid email"
: "Invalid email"

console.log(result)

let num1 = Number(prompt("Enter first number"))
let num2 = Number(prompt("Enter second number"))
let num3 = Number(prompt("Enter third number"))

if (num1 > num2 && num1 > num3) {
    console.log(num1)
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2)
}
else {
    console.log(num3)
}
let correct_password = "admin@123"

for (let i = 1; i <= 4; i++) {

    let password = prompt("Enter password")

    if (password === correct_password) {
        console.log("Access granted")
        break
    }
    else {
        console.log("Wrong password")
    }

    if (i == 4) {
        console.log("Account blocked")
    }
}

let marks = Number(prompt("Enter marks"))

if (marks > 79) {
    console.log("Grade A")
}
else if (marks >= 60 && marks <= 79) {
    console.log("Grade B")
}
else if (marks >= 50 && marks <= 59) {
    console.log("Grade C")
}
else if (marks >= 40 && marks <= 49) {
    console.log("Grade D")
}
else {
    console.log("Grade E")
}

let rows = Number(prompt("Enter number of rows"))
for(let i = 1 ; i <=rows ; i++){
    let row = ''
    for(let j = 1;j <=i; j++){
        row +='*'
    }
}
console.log(row)

let speed = Number(prompt('Enter speed:'))

let speed_limit = 70

if(speed <= speed_limit){
    console.log('OK')
}else{
    let speed_exceeded = speed - speed_limit

    let points = Math.ceil(speed_exceeded/5)

    if (points > 12){
        console.log('license suspended')
    }else{
        console.log('points ---:', points)
    }
}

let prods = [
    ['omo', '30kshs', '300'],
    ['milk', '50kshs', '200'],
    ['bread', '45kshs', '359'],
    ['coffee', '5kshs', '79']
]

let total_stock = 0

for (let i = 0; i < prods.length; i++) {

    total_stock += Number(prods[i][2])
}

console.log(total_stock)