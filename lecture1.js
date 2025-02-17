const num1 = 10;
let num2 = 20;
var num3 = 30;
console.log(num1, num2, num3); // 10 20 30

//operators
//basic artihmetic operators

var a = 10;
var b = 20;
console.log(a + b); // 30
console.log(a - b); // -10
console.log(a * b); // 200
console.log(a / b); // 0.5
console.log(a % b); // 10
console.log(a ** b); // 100000000000000000000
a++; // a = a + 1
console.log(a); // 11
a--; // a = a - 1
console.log(a); // 10
++b; // b = b + 1
console.log(b); // 21
--b; // b = b - 1
console.log(b); // 20

//assignment operators
console.log(a += 5); // a = a + 5
console.log(a -= 5); // a = a - 5
console.log(a *= 5); // a = a * 5
console.log(a /= 5); // a = a / 5
console.log(a %= 5); // a = a % 5
console.log(a **= 5); // a = a ** 5

//comparison operators bitwisw operators
console.log(a &= 5); // a = a & 5
console.log(a |= 5); // a = a | 5
console.log(a ^= 5); // a = a ^ 5
console.log(a >>= 5); // a = a >> 5
console.log(a <<= 5); // a = a << 5

//logical operators
console.log(a && b); // true && true = true
console.log(a || b); // true || true = true
console.log(!a); // !true = false


//conversion in string and number
let x =[1 + 2 + "3"];
let y = ["1" + 2 + 3];
console.log(x);
console.log(y);

//type operators
console.log(typeof x); 
let z = true;

//instanceof operator

//confusing operation
console.log(null = 0);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined = 0);
console.log(undefined < 0);
console.log(undefined > 0);
console.log("2" == 2);