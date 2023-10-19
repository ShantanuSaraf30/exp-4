
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        }
    }


    class Student extends Person {
        constructor(name, age, rollNo) {
            super(name, age); 
            this.rollNo = rollNo;
        }

        // Override the sayHello method
        sayHello() {
            return `Hello, my name is ${this.name}, I am ${this.age} years old, and my roll number is ${this.rollNo}.`;
        }


        validateRollNo() {
            if (this.rollNo <= 0) {
                throw new Error("Roll number must be greater than 0.");
            }
        }
    }


    const student1 = new Student("Alice", 20, 101);


    console.log(student1.sayHello()); 


    try {
        student1.validateRollNo(); 
    } catch (error) {
        console.error("Error:", error.message); 
    }


    const student2 = new Student("Bob", 22, 0);


    try {
        student2.validateRollNo(); 
    } catch (error) {
        console.error("Error:", error.message); 
    }
