// Static = keyword in JavaScript that defines properties or methods that belong 
//          to a class itself rather than the objects created from 
//          that class (class own anything static, not the objects).


class MathUtils {
    static PI = 3.1459;

    static getDiameter(radius) {
        return radius * 2;
    }
    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }
    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

// i don't need to to create an object to use this property 
// all i have to do is type the name of the class 

// anything declared static belongs to the class itself, not the object

console.log(MathUtils.PI);
console.log(MathUtils.getDiameter(10));
console.log(MathUtils.getCircumference(50));
console.log(MathUtils.getArea(15));


//* Example 2 

class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++; // increment the static userCount property
    }
    static getUserCount() {
        console.log(`There are ${User.userCount} users online .`)
    }
    sayHello(){
        console.log(`Hello, my name is ${this.username }`)
    }
}

const user1 = new User('Spongebob');
const user2 = new User('Patrick');
const user3 = new User('Sandy');

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(user1.userCount); // will come undefined because userCount is static and belong to User class
 
// to access it call the User.userCount

user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount();