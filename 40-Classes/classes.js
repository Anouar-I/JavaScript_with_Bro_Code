// Class = (ES6 feature) provides a more structured and cleaner way to 
//         work with objects compared to traditional constructor function 
//         ex : static keyword ,encapsulation, inheritance.


class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // inside of a class we don't need to use the function keyword

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
    // we will create a method to calculate the price with tax
    calculatetotal(salesTax){
        return this.price + (this.price * salesTax);
    }

}

const salesTax = 0.05;

// Example of creating an instance of the Products class

const product1 = new Products("Shirt", 19.99);
const product2 = new Products("Pants", 22.50);
const product3 = new Products("Jacket", 55.50);

product1.displayProduct(); // Output: Product: Shirt, Price: $19.99
product2.displayProduct(); // Output: Product: Pants, Price: $22.50
product3.displayProduct(); // Output: Product: Jacket, Price: $55.50

const total1 = product1.calculatetotal(salesTax);
console.log(`total price with tax : $${total1.toFixed(2)}`);

const total2 = product2.calculatetotal(salesTax);
console.log(`total price with tax : $${total2.toFixed(2)}`);

const total3 = product3.calculatetotal(salesTax);
console.log(`total price with tax : $${total3.toFixed(2)}`);

// class provide a more structured way to create objects and methods
