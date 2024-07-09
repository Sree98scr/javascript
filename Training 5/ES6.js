//let
let x=50;
console.log(x)
if (x){
    let x=3
    console.log(x);
}
console.log(x);

//const
let a =8;
if (a){
  a=3
    console.log(a);
}
console.log(a);

//arrow function
let m=3
let n=5
const c =(m,n) => m*n
console.log(c(m,n));

//destructing assignment, //array destructing
var student={
    name: "priya",
    section:"a",
    place: "colachel"

}
//destrucing
let {name,place}=student;
console.log(student.name +" "+  "is" + " "+"from" +" "+ student.place);

//spread operator

//copy
var a1=[2,3,4]
var a2=[...a1]
console.log(a2)

//combine
var b1=[1,2,3]
var b2=[5,6,7]
console.log(...b1,...b2)

//function
function add(a1,a2){
    return a1+a2
}
console.log(add(...a1))
//for loop
let fruits = ["Apple", "Banana", "Cherry", "Date"];

for (let i = 0; i < fruits.length; i++) {   // Loop over the array 
    console.log(fruits[i]);
}

//class

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

person1.displayInfo();
person2.displayInfo();


//set
let mySet = new Set();

// Adding elements to the Set
mySet.add(5);      
mySet.add("Hello");  
mySet.add(5);        


mySet.add(2).add(3);  // chain the add method

console.log(mySet);
console.log(mySet.size);    // number of elements in the Set)

console.log(mySet.has(5));  // checks if the value 1 exists in the Set
console.log(mySet.has("Hi")); //checks if the value "Hi" exists in the Set
