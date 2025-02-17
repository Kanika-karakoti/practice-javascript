//DATATYPES

//number
let height = 10;
let weight = 20;
console.log(height + weight);
console.log(typeof a + typeof b);

//string
let color = "red";
let name = "John";
console.log(color + name);
console.log(typeof color + typeof name);

//boolean
let x = true;
let y = false;
console.log(typeof x + typeof y);

//object
const person= {first:"kanika", last:"gaur", age:20};
console.log(person);
console.log(typeof person);

//arrray of objects
const car =['bmw','audi','mercedes'];
console.log(car);
console.log(typeof car);

//date object
const today = new Date("14 -02- 2004");
console.log(today);
console.log(typeof today);

//comcept of datatype
let z =10 +"car";
console.log(z);
console.log(typeof z);

//dynamic 
let a ;
a = "car";
a = 10;
console.log(a);
console.log(typeof a);

//Exponential notation
let num = 2e5;
console.log(num);
console.log(typeof num);

//BigInt
let num1 = BigInt(12345678901234567890);
console.log(num1);

//undefined
let c;
console.log(c);

//Empty value
let d = null;
console.log(d);
console.log(typeof d);

let e = "";
console.log(e);
console.log(typeof e);

//symbol
let q = Symbol("hello");
let w = Symbol("hello");
console.log(q === w);
console.log(typeof q + typeof w);

//function object
// const myFunction = other_funtion() {
//     alert("hello world");
// }
// console.log(myFunction);
// console.log(typeof myFunction);

//stack and heap concept

const myYoutube = "kanika";
const anotherYoutube = myYoutube;
console.log(myYoutube);
console.log(anotherYoutube);
anotherYoutube = "gaur";
console.log(myYoutube);
console.log(anotherYoutube);

const email_id ={
    name:"kanika",
    email:"kanika@gmail.com"
}
console.log(email_id);
another_email_id.name = "gaur";
const another_email_id = email_id;

console.log(another_email_id);
console.log(email_id.name);
console.log(another_email_id.name);
