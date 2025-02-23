// Minimum and Maximum Safe Integers
// let x = Number.MAX_SAFE_INTEGER;
// let y = Number.MIN_SAFE_INTEGER;
// console.log(x); // Output: 9007199254740991
// console.log(y); // Output: -9007199254740991

//New Number Methods
// Number.isInteger(10);// returns true if the argument is an integer.
//Number.isInteger(10.5);

// Number.isSafeInteger(10);
// Number.isSafeInteger(12345678901234567890);

//toString()	- Returns a number as a string
// let x = 123;
// x.toString();
// (123).toString();
// (100 + 23).toString();
// console.log(x.toString());

//toExponential()	- Returns a number written in exponential notation
// let x = 9.656;
// x.toExponential(2);
// x.toExponential(4);
// x.toExponential(6);

//toFixed() -	Returns a number written with a number of decimals
// let x = 9.656;
// x.toFixed(0);
// x.toFixed(2);
// x.toFixed(4);
// x.toFixed(6);

//toPrecision() - Returns a number written with a specified length
// let x = 9.656;
// x.toPrecision();
// x.toPrecision(2);
// x.toPrecision(4);
// x.toPrecision(6);

//valueOf() - Returns a number as a number
// let x = 123;
// x.valueOf();
// (123).valueOf();
// (100 + 23).valueOf();


//Dates

/*
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
*/

/*

Math.round(x)	Returns x rounded to its nearest integer (integer deta ha points may nhi)
Math.ceil(x)	Returns x rounded up to its nearest integer 
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x
*/

/*
abs(x)	Returns the absolute value of x (convert negative sign to positive sign only)
acos(x)	Returns the arccosine of x, in radians
acosh(x)	Returns the hyperbolic arccosine of x
asin(x)	Returns the arcsine of x, in radians
asinh(x)	Returns the hyperbolic arcsine of x
atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	Returns the arctangent of the quotient of its arguments
atanh(x)	Returns the hyperbolic arctangent of x
cbrt(x)	Returns the cubic root of x
ceil(x)	Returns x, rounded upwards to the nearest integer
cos(x)	Returns the cosine of x (x is in radians)
cosh(x)	Returns the hyperbolic cosine of x
exp(x)	Returns the value of Ex
floor(x)	Returns x, rounded downwards to the nearest integer
log(x)	Returns the natural logarithm (base E) of x
max(x, y, z, ..., n)	Returns the number with the highest value
min(x, y, z, ..., n)	Returns the number with the lowest value
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Rounds x to the nearest integer
sign(x)	Returns if x is negative, null or positive (-1, 0, 1)
sin(x)	Returns the sine of x (x is in radians)
sinh(x)	Returns the hyperbolic sine of x
sqrt(x)	Returns the square root of x
tan(x)	Returns the tangent of an angle
tanh(x)	Returns the hyperbolic tangent of a number
trunc(x)	Returns the integer part of a number (x
*/

//practical example

// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);//typeof string
// console.log(balance.toFixed(3));//point ka baad value (100.000)

// const otherNumber = 23.2233;//237.999  1234.7886
// console.log(otherNumber.toPrecision(3));//precise value and focus value

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString);//, lagata ha numbers ka beech may but us value may
// console.log(hundreds.toLocaleString('en-IN'));//indian value ka hisab se ,

//random value

// console.log(Math.round());
// console.log((Math.round{}*10)+1);
// console.log(Math.floor(Math.random{}*10)+1);

// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random{}*(max - min + 1))+ min);



