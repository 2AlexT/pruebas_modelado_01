const fs = require('fs');
console.log("Dentro del proyecto")
const object= {name:"Alice",options:"Values"}
console.log(object)
const objectWay1 = new Object();
objectWay1.name = "Alice"
console.log(objectWay1)

function Person(name, age){
    this.name = name,
    this.age = age
}
const ObjectWay2 = new Person("Alice", 30);
console.log("Object Way 2\n" + JSON.stringify(ObjectWay2));

class PersonWay{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
}
const objectWay3 = new PersonWay("aAlice", 103);
console.log(JSON.stringify(objectWay3)) 