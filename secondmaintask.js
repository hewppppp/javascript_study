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