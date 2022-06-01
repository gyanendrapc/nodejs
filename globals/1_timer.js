// // setImmediate() method
// setImmediate(function A() {
//     setImmediate(function B() {
//         console.log(1);
//         setImmediate(function D() {
//             console.log(2);
//         })
//     })
//     setImmediate(function C() {
//         console.log(3);
//         setImmediate(function E() {
//             console.log(4);
//         });
//     });
// })
// console.log('Started...');


// // setInterval() method
// let i = 0;

// setInterval(() => {

//     return console.log(i += 1);
// }, 1000);

//setTimeout() method

// setTimeout(() => {
//     return console.log("Good Bye");
// }, 3000);
// // executed right away
// console.log('Executed before A...');

// // clearImmediate() method
// var si = setImmediate(function A() {
//     console.log(1);
// });
// //Clear setInterval si
// clearImmediate(si);
// console.log(2);

// // clearInterval() method:
// var si = setInterval(function A() {
//     return console.log("Hello World");

// }, 100);

// setTimeout(() => {
//     clearInterval(si)
// }, 5000);

// clearTimeout() method: It is used to cancel the Immediate object created by setTimeout() method.

var si1 = setTimeout(() => {
    return console.log("Hello world");
}, 3000);
// only si2 is executed
var si2 = setTimeout(function B() {
    return console.log("Hello Geeks!");
}, 3000);

clearTimeout(si1);