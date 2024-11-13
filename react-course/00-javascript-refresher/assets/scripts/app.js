// Extension: Live server
// right click the html file or ctrl + shift + p --> Live server: Open with live server 

// import { apiKey } from "./util.js";

// import apiKey from "./util.js";
import { apiKey, abc as anotherVar } from "./util.js";
// import * as util from "./util.js";

//console.log(anotherVar);
//console.log(util.apiKey);

function greetUser(apiKey, anotherVar = "defaultValue") {
    console.log(apiKey);
    console.log(anotherVar);
}

// arrow functions
export default (apiKey) => {
    console.log("Hello");
    return apiKey
}

// If the arrowfunction have 1 parameter, you can drop the paranthese, e.g. apiKey => {}
// If there are no parameters, parantheses must not be omitted. Same for mulitple parameters
// If there are no other logic than return, you can omit the curly braces, number => number*3
// Special case: Just returning an object
// JavaScript treats curly braces as function body wrappers.
// Wrap curly braces with parantheses to tell JS to create and return an object. number => ({age: number});


// Objects and classes
/* const user = {
    name: "Max",
    age: 34,
    greet() {
        console.log("Hello");
        console.log(this.age);
    }
};

user.greet();

(user) => {
    return user.name;
}

// class = blueprint for creating objects
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("Hi");
    }
}

const user1 = new User("Minfilia", 35);
console.log(user1); */


// Arrays
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

const index = hobbies.findIndex((item) => {
    return item === "Sports";
})

const index2 = hobbies.findIndex((item) => item === "Cooking")

console.log("Index of Cooking in hobbies array: ", index2);

// Mapping
const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies)


// Destructuring

/* // Long version
const userNameData = ["Max", "Schwarzmüller"];
const firstName = userNameData[0];
const lastName = userNameData[1]; */

/* // Short version
const [firstName, lastName] = ["Max", "Schwarzmüller"];
console.log(firstName);
console.log(lastName); */


/* // Long version
const user = {
    name: "Max",
    age: 34
}
const name = user.name;
const age = user.age; */

// Short version
/* const { name: userName, age } = {
    name: "Max",
    age: 34
}
console.log(userName);
console.log(age); */


// Spread Operator
/* const hobbies = ["Sports", "Cooking"];
const user = {
    name: "Max",
    age: 34
};

const newHobbies = ["Reading"];
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);
// const mergedHobbies = [hobbies, newHobbies]; // This gives an array with 2 arrays

const extendedUser = {
    isAdmin: true,
    ...user
}
console.log(extendedUser);
 */


// Revisiting Control structures
// If else statements
/* const password = prompt('Your password');
if (password === "Hello") {
    console.log("Hello works");
} else if (password === "hello") {
    console.log("hello works");
} else {
    console.log("Access not granted")
} */

// For loop
/* const hobbies = ["Sports", "Cooking"];
for (const el of hobbies) {
    console.log(el);
}

hobbies.forEach(el => {
    console.log(el);
}) */


// Manipulating the DOM - Not with React!
// React will do it for us, normally we will fetch elements and change them real time
/* const list = document.querySelector('ul');
list.remove(); */


// Using functions as values
/* function handleTimeout() {
    console.log("Timed out");
}

const handleTimeout2 = () => {
    console.log("Timed out ... again!");
}
setTimeout(handleTimeout, 2000); // arg1: function, arg2: millisecond
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
    console.log("More timing out...")
}, 4000);


function greeter(greetFn) {
    greetFn();
}

greeter(() => console.log("Hi")) */


// Defining functions inside of functions
/* function init() {
    function greet() {
        console.log("Hi")
    }
    greet();
}

// greet(); // This will not work
init(); */


// Reference vs Primitive Values
let userMessage = "Hello";
// String, numbers and booleans are primitive values
