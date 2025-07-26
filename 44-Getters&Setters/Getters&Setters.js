// Getter  = special method that makes a property readable
// Setter  = special method that makes a property writable

// validate and modify a value when reading/writing a property

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number");
        }
    }
    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number");
        }
    }
    // to read a value we use a getter aka get 

    get width() {
        return `${this._width.toFixed(2)} Cm`; // toFixed converts the number to a string with 2 decimal places
    }
    get height() {
        return `${this._height.toFixed(2)} Cm`;
    }
    // we can also use a getter to access a property that does not exist
    get area() {
        return `${(this._width * this._height).toFixed(2)} Cm²`;
    }

}
// to make sure people don't insert unreasonable values
// we can use getters and setters
// const rectangle = new Rectangle(-10000000,"pizza");
const rectangle = new Rectangle(3, 4);

// and by using setter we can update those values later

rectangle.width = 5; // valid
rectangle.height = 6; // valid

console.log(rectangle.width);
console.log(rectangle.height);
// so now we can access the area property
console.log(rectangle.area);

//! 2ed example

class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        } else {
            console.error("First name must be a non-empty string");
        }
    }
    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        } else {
            console.error("Last name must be a non-empty string");
        }
    }
    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        } else {
            console.error("Age must be a non-negative number");
        }
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }
    get fullName(){
        return `${this._firstName} ${this._lastName}`;
    }
    get introduction(){
        return `Hello, my name is ${this._firstName} ${this._lastName} and I am ${this._age} years old.`;
    }
}

const person = new Person("John", "Doe", 23);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName)
console.log(person.introduction)
console.log(person.age);

