// constructor = special method for defining the
//                properties and methods of an object

// insted of making an object manually, we can use a constructor function

// same as function somthing() {a,b,c,d}

function Car(make, model, year,color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function() {console.log(`You drive the ${this.make} ${this.model}`);}
}

// to use this constructor make an instant of an object

const car1 = new Car("BMW", "M5", 2024, "black");
const car2 = new Car("Ford", "Mustang", 2024, "Green");
const car3 = new Car("Dodge", "Charger", 2024, "White");

console.log(car1.make); 
console.log(car1.model); 
console.log(car1.year); 
console.log(car1.color); 
car1.drive(); // calling the method

console.log(car2.make); 
console.log(car2.model); 
console.log(car2.year); 
console.log(car2.color); 
car2.drive();

console.log(car3.make); 
console.log(car3.model); 
console.log(car3.year); 
console.log(car3.color); 
car3.drive()

// it's a special way to define the properties and methods of an object 
// it helps with code reusability and organization