//strings

//quotes
let answer1='animal';
let answer2= "animal2";
let answer3= "animal is 'dog' "; /* template string
                                allow single and double quotes 
                                inside the string.
                                not supported in internet explorer */
console.log(answer1, answer2,answer3);

//string as objects
let name = "john";
let y = new String("ken");
console.log("new string object is ", y);

// add two objects together
const  naam = "kanika";
const number = 20;
console.log('My name is ${naam} and my age is ${number}');

//Basic string methods

/* 
   string length

   charAt()
   charCodeAt()
   at()
   [-]

   slice()
   substring()
   substr()

   toUpperCase()
   toLowerCase()
   trim()
   trimStart()
   trimEnd()
   concat()

   includes()
   endsWith()
   startsWith()

   padStart()
   padEnd()
   repeat()
   split()
   join()
   replace()
   replaceAll()

   //see also:
   Search Methods
   Templetes
*/
let a = 112345;
let alph ="abszdfdgdfhfdhf";
let alph_2 = "world";
let word = "     hello      ";
let neg = -3;

//Length

console.log(alph.length);//length bata ta ha 

//Extracting String Character

console.log(alph.charAt(0));//character specifies index(position) in string
console.log(alph.charCodeAt(0));//return the code of the character at a specifies index in the string
console.log(neg.at(-3));//use to convert negative into positive. and modern browser only
console.log(alph[4]);//property access []

//Extracting String Parts

let text = "Apple , pineapple , banana";

console.log(text.slice(5 , 13));//return the word from 5 to 13 index
console.log(text.slice(-14,-5));
console.log(text.subString(7,13));//The difference is that start and end values less than 0 are treated as 0 in substring().
console.log(text.substr(7,6));//The difference is that the second parameter specifies the length of the extracted part.
console.log(text.substr(-4));//If the first parameter is negative, the position counts from the end of the string

//Convert the upper and lower case

console.log(alph.toUpperCase());
console.log(alph.toLowerCase());
console.log(alph.concat(alph + "" + alph_2));//join 2 or more strings to-gether
console.log(word.trim());//method removes whitespace from both sides of a string
console.log(word.trimStart());//The trimStart() method works like trim(), but removes whitespace only from the start of a string
console.log(word.trimEnd());// removes whitespace only from the end of a string.

//String Padding

console.log(a.padStart(4,"0"));//It pads a string with another string (multiple times) until it reaches a given length(It pads a string with another string (multiple times) until it reaches a given length)
console.log(a.padEnd(3,"0"));//pads a string from the end

//String Repeat(count)  Create copies of a text:

console.log(alph.repeat(2));//returns a string with a number of copies of a string

//Replacing String Content
//By default, the replace() method replaces only the first match:
let text_2 = "I love to eat apples.";
console.log(text_2.replace("apples" , "chiku"));//replaces a specified value with another value

let text_3 = "I like apple and apple"
console.log(text_3.replace("apple" , "Chiku"));
console.log(text_3.replaceAll("apple","chiku"));//allows you to specify a regular expression instead of a string to be replaced.

//String split()  A string can be converted to an array 
console.log(text.split(","));
console.log(text.split(""));

//String Search Method

//String indexOf()
console.log(text.indexOf("pineapple"));//returns the index of the first occurrence of a specified valu
console.log(text.lastIndexOf("banana"));

//String search()

console.log(text.search("apple"));

/*
The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
 */

// String match()
console.log(text.match("apple"));//returns an array containing the matched strings, or null if no
console.log(text.match(/apple/));
// The match() method returns an array containing the matched strings, or null if no match is found
console.log(text.matchAll("pineapple"));

//String includes()

let text_4 = "Hello world, welcome to the universe.";
console.log(text_4.includes("world"));
console.log(text_4.includes("world",12));
console.log(text_4.startsWith("hello"));//returns true if a string begins with a specified value. else false
console.log(text_4.startsWith("hello",5));
console.log(text_4.endsWithWith("universe"));//returns true if a string ends with a specified value.
console.log(text_4.endsWithWith("universe",11));


//Template Strings

//Back-Tics Syntax
let sent = `Hello World!`;
console.log(sent);

//Quotes Inside Strings
let sent_2 = `He's often called "Johnny"`;
console.log(sent_2);

//Multiline Strings
let sent_3 =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(sent_3);

//Variable Substitutions
let firstName = "John";
let lastName = "Doe";

let sent_4 = `Welcome ${firstName}, ${lastName}!`;

//Expression Substitution
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

//HTML Templates
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;

/* 
Interpolation
Template String provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

The syntax is: ${...}
*/