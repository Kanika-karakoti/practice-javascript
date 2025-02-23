// Creating Date Objects

/*
Note
JavaScript counts months from 0 to 11:

January = 0.

December = 11.
*/

// Date objects are created with the new Date() constructor.

// There are 9 ways to create a new date object:

// new Date()  creates a date object with the current date and time:
const d = new Date();
console.log(d); // Output: 2023-03-09T14:30:00
// new Date(date string) creates a date object from a date string
const d1 = new Date("October 13, 2014 11:13:00");
console.log(d1); // Output: 2014-10-13T11:13:
const d2 = new Date("2022-03-25");
console.log(d2); // Output: 2022-03-25T00:00:

// new Date(year,month)  creates a date object with a specified date and time
const d3 = new Date(2018, 11, 24, 10, 33, 30, 0);//7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)
const m = new Date(100000000000);

/*
 toDateString() convert a date to a more readable format
 toUTCString() convert a date to a string using the UTC
 toISOString() method converts a date to a string using the ISO standard
 */

 /*
 Date Get Methods

Method	Description
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)
*/

/**
 Set Date Methods
Set Date methods are used for setting a part of a date:

Method	Description
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (yyyy)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)

 */