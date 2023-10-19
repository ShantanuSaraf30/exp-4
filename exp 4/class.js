// Using Constructor Function
function Person(name, age) {
    this.nodename = name;
    this.age = age;
}

Person.prototype.sayHello = function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

//  Using ES6 Class
class PersonES6 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

//Using Arrow Function 
const createPerson = (name, age) => ({
    name,
    age,
    sayHello: () => `Hello, my name is ${name} and I am ${age} years old.`,
});

const person1 = new Person("Alice", 30);
const person2 = new PersonES6("Bob", 25);
const person3 = createPerson("Charlie", 35);

console.log(person1.sayHello()); // Output: Hello, my name is Alice and I am 30 years old.
console.log(person2.sayHello()); // Output: Hello, my name is Bob and I am 25 years old.
console.log(person3.sayHello()); // Output: Hello, my name is Charlie and I am 35 years old.
