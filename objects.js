let person = {
    name : "Jane Doe",
    age: 29,
    address: "123 Kimathi Street"
}
console.log(person)
console.log(person.name)
console.log(person['is employed'])
console.log(person['address'])

person.name = 'Alice'
console.log(person)

console.log(Object.keys(person))

console.log(Object.values(person))

console.log(Object.entries(person))

(2) ['name', 'Alice']

(2) ['age', 29]