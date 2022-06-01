// no parameters constructor
var params = new URLSearchParams();
console.log(params);


// parameter as string construcotr
var params = new URLSearchParams('user=abc&q=xyz');
console.log(params.get('user'));
console.log(params.get('q'));

// parameter as object constructor
var params = new URLSearchParams({
    use: 'gyanendrapc',
    courses: ['python', 'javascript']
});

console.log(params.toString());

// new URLSearchParams(iterable):

// Using a Map object as it is iterable

const map = new Map();
map.set('West Bengal', 'Kolkata');
map.set('Kernataka', 'Benguluru');
var params = new URLSearchParams(map);
console.log(params.toString());


// 
console.log('==============ACCESSING URL=================');

// Accessing the URL query:

// urlSearchParams.get(name): Returns the value of the first name-value pair that matches with the argument passed. If no such pair exists, null is returned.
var myURL = new URL('https://example.org/?abc=123&abc=526');
console.log(myURL.searchParams.get('abc'));

// urlSearchParams.getAll(name): Returns all the value of the name-value pair that matches with the argument passed. If no such pair exists, null is returned.
var myURL = new URL('https://example.org/?abc=123&abc=526');
console.log(myURL.searchParams.getAll('abc'));

// urlSearchParams.has(name): Returns true if the argument passed matches with any existing name of the name - value pair else returns false.


var myURL = new URL('https://example.org/?abc=123&xyz=526');
console.log(myURL.searchParams.has('abc'));
console.log(myURL.searchParams.has('abcd'));


// Manipulating the URL query:
console.log("=====================Manipulating the URL query:======================");


//urlSearchParams.set(name, value): Sets the value in the URLSearchParams object associated with name to the specified value. If more than one name-value pairs exists, whose names are same as the ‘name’ argument, then the only value of first matching pair is changed, rest all are removed.


var params = new URLSearchParams(
    'abc=123&xyz=526&abc=258');
console.log(params.toString());
params.set('aaa', 'jklfjdflkajfjdfkfka');
console.log(params.toString());
params.set('abc', 'opq');
console.log(params.toString());

// urlSearchParams.append(name, value): Appends a new name-value pair to the existing URLSearchParams query.



var params = new URLSearchParams('xyz=123');
params.append('foo', '789');
params.append('foo', '789');
params.append('xyz', 'zoo');
params.append('foo', 'def');
console.log(params.toString());

// urlSearchParams.delete(name): Removes all name - value pairs whose name is same as ‘name’ argument.
var params = new URLSearchParams(
    'xyz=123&foo=789&xyz=zoo&foo=def');
console.log('before deleting ', params.toString());
params.delete('foo');
console.log('after deleting ', params.toString());


// urlSearchParams.sort(): Sorts the existing name-value pairs in-place by their names using a stable sorting algorithm.
var params = new URLSearchParams(
    'xyz=123&foo=789&xyz=zoo&foo=def');
console.log("Before sorting : ", params.toString());
params.sort();
console.log("After sortin : ", params.toString());


// urlSearchParams.toString(): Returns the URL search parameters as a string, with characters percent-encoded wherever necessary.
var params = new URLSearchParams(
    'query=node&type=search&passwd[]=3456');
console.log('Result :', params.toString());



// ===========================Iterating the URL query:==========================
console.log("===========================Iterating the URL query:==========================");

// urlSearchParams.entries(): Returns an iterator over the entry set of the param object.
var params = new URLSearchParams(
    'query=node&type=search&passwd=3456');
for (var pair of params.entries()) {
    // console.log(pair);  
    console.log(pair[0] + '-------->' + pair[1]);
}

// urlSearchParams.keys(): Returns an iterator over the key set of the param object.

var params = new URLSearchParams(
    'query=node&type=search&passwd=3456');

console.log(params.keys());
for (var i of params.keys()) {
    console.log(i);
}

// urlSearchParams.values(): Returns an iterator over the value set of the param object.

var params = new URLSearchParams(
    'query=node&type=search&passwd=3456');
console.log(params.values());
for (var i of params.values()) {
    console.log(i);
}


// urlSearchParams.forEach(fn[, arg]): fn is a function invoked for each name-value pair in the query and arg is an object to be used when ‘fn’ is called. It iterates over each name-value pair in the query and invokes the function.
var myURL = new URL(
    'https://example.com/?a=b&c=d&d=z');

myURL.searchParams.forEach((value, name, searchParams) => {
    console.log(name, value, myURL.searchParams === searchParams);
});

// urlSearchParams[Symbol.iterator]():
var params = new URLSearchParams(
    'firstname=john&lastname=beck&gender=male');
for (const [name, value] of params) {
    console.log(name, '<------> ', value);
} 