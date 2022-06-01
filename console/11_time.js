// Node.js program to demonstrate the
// console.time() method

// Sample function
function addCount() {
    var sum = 0; // Variable declaration
    for (var i = 1; i < 100000; i++) {
        sum += i; // Adding i to the sum variable
    }
    return sum; // returning sum
}

function countTime() {
    var timetaken = "Time taken by addCount function";

    // Starts the timer, the label value is timetaken
    console.time(timetaken);

    console.log(addCount()); // function call

    // Ends the timer and print the time
    // taken by the piece of code
    console.timeEnd(timetaken);
}

var label2 = "Time taken by countTime function";

// Starts the timer, the label value is label2
console.time(label2);

countTime(); // function call

// Ends the timer and print the time
// taken by the piece of code
console.timeEnd(label2);
