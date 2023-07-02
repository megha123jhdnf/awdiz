//CONCAT- method is used to merge two or more arrays.

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// output: Array ["a", "b", "c", "d", "e", "f"]


// FILTER  -creates a shallow copy of a portion of a given array

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);
//  output: Array ["exuberant", "destruction", "present"]


// FIND- returns the first element in the provided array that satisfies the provided
// testing function. 

// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 10);
// console.log(found);
//  output: 12


// FINDINDEX- returns the index of the first element in an array

// const array1 = [5, 12, 8, 130, 44];
// const isLargeNumber = (element) => element > 13;
// console.log(array1.findIndex(isLargeNumber));
// output: 3


// FINDLAST*-method iterates the array in reverse order and returns the value of the first
// element that satisfies the provided testing functio

// const array1 = [5, 12, 50, 130, 44];
// const found = array1.findLast((element) => element > 45);
// console.log(found);
//  output: 130


// findLastIndex*-  method iterates the array in reverse order and returns the index of the
// first element 

// const array1 = [5, 12, 50, 130, 44];
// const isLargeNumber = (element) => element > 45;
// console.log(array1.findLastIndex(isLargeNumber));
// // output: 3
// Index of element with value: 130


// FLAT*-creates a new array with all sub-array elements concatenated into it
// recursively up to the specified depth.

//  const arr1 = [0, 1, 2, [3, 4]];
//  console.log(arr1.flat());
//  // output: Array [0, 1, 2, 3, 4]
//  const arr2 = [0, 1, 2, [[[3, 4]]]];
//  console.log(arr2.flat(2));
// // output: Array [0, 1, 2, Array [3, 4]]

// FLATMAP -returns a new array formed by applying a given callback function to
// each element of the array,

// const arr1 = [1, 2, 1];
// const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));
// console.log(result);
// output: Array [1, 2, 2, 1]

// FOREACH -executes a provided function once for each array element.

// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));
// output: "a"
//  output: "b"
// output: "c"

// FROM -static method creates a new, shallow-copied Array instance from an iterable or array-like object.

// console.log(Array.from('foo'));
//output: Array ["f", "o", "o"]
// console.log(Array.from([1, 2, 3], x => x + x));
// output: Array [2, 4, 6]

// INCLUDE -method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// const array1 = [1, 2, 3];
// console.log(array1.includes(2));
// //  output: true
// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));
// //  output: true
// console.log(pets.includes('at'));
// //  output: false



// INDEXOF -returns the first index at which a given element can be found in the array, or -1 if it is not present.

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison'));
// //  output: 1
// // Start from index 2
// console.log(beasts.indexOf('bison', 2));
// //  output: 4
// console.log(beasts.indexOf('giraffe'));
// output: -1



// Array.isArray -static method determines whether the passed value is an Array.

// console.log(Array.isArray([1, 3, 5]));
// //  output: true
// console.log(Array.isArray('[]'));
// //  output: false
// console.log(Array.isArray(new Array(5)));
// //  output: true
// console.log(Array.isArray(new Int16Array([15, 33])));
// //  output: false


// join- creates and returns a new string by concatenating all of the elements in An array (or an array-like object)

// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());
// //  output: "Fire,Air,Water"
// console.log(elements.join(''));
// //  output: "FireAirWater"
// console.log(elements.join('-'));
// // output: "Fire-Air-Water"


// keys- returns a new array iterator object that contains the keys for each index in the array.

// const array1 = ['a', 'b', 'c'];
// const iterator = array1.keys();
// for (const key of iterator) {
//   console.log(key);
// }

//  output: 0
//  output: 1
//  output: 2


// lastIndexOf- returns the last index at which a given element can be found in the array, or -1 if it is not present

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
// console.log(animals.lastIndexOf('Dodo'));
// //  output: 3
// console.log(animals.lastIndexOf('Tiger'));
// //  output: 1


// MAP -creates a new array populated with the results of calling a provided function on every element in the calling array.

// const array1 = [1, 4, 9, 16];
// // Pass a function to map
// const map1 = array1.map(x => x * 2);
// console.log(map1);
// // output: Array [2, 8, 18, 32]


// Array.of - static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

// console.log(Array.of('foo', 2, 'bar', true));
// //  output: Array ["foo", 2, "bar", true]
// console.log(Array.of());
//  output: Array []


// pop() - method removes the last element from an array and returns that element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// console.log(plants.pop());
// // output: "tomato"
// console.log(plants);
// // output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
// plants.pop();
// console.log(plants);
// // output: Array ["broccoli", "cauliflower", "cabbage"]


// push- adds the specified elements to the end of an array and returns the new length of the array.

// const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.push('cows');
// console.log(count);
// //  output: 4
// console.log(animals);
// //  output: Array ["pigs", "goats", "sheep", "cows"]
// animals.push('chickens', 'cats', 'dogs');
// console.log(animals);
// output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


// reduce- executes a user-supplied "reducer" callback function on each element of the array

// const array1 = [1, 2, 3, 4];
// //  0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );
// console.log(sumWithInitial);
//  output: 10


// reduceRight -applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

// const array1 = [[0, 1], [2, 3], [4, 5]];
// const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
// console.log(result);
//  output: Array [4, 5, 2, 3, 0, 1]


// reverse - method reverses an array in place and returns the reference to the same array,

// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// // output: "array1:" Array ["one", "two", "three"]
// const reversed = array1.reverse();
// console.log('reversed:', reversed);
// //  output: "reversed:" Array ["three", "two", "one"]
// // Careful: reverse is destructive -- it changes the original array.
// console.log('array1:', array1);
// //  output: "array1:" Array ["three", "two", "one"]


// shift - removes the first element from an array and returns that removed element. 

// const array1 = [1, 2, 3];
// const firstElement = array1.shift();
// console.log(array1);
// //output: Array [2, 3]
// console.log(firstElement);
// //  output: 1


// lice() -  method returns a shallow copy of a portion of an array into a new array object selected from start to end

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// // output: Array ["camel", "duck", "elephant"]
// console.log(animals.slice(2, 4));
// // output: Array ["camel", "duck"]
// console.log(animals.slice(1, 5));
// //  output: Array ["bison", "camel", "duck", "elephant"]
// console.log(animals.slice(-2));
// //  output: Array ["duck", "elephant"]
// console.log(animals.slice(2, -1));
// // output: Array ["camel", "duck"]
// console.log(animals.slice());
//  output: Array ["ant", "bison", "camel", "duck", "elephant"]



// some()  - method tests whether at least one element in the array passes the test implemented by the provided function

// const array = [1, 2, 3, 4, 5];
// // Checks whether an element is even
// const even = (element) => element % 2 === 0;
// console.log(array.some(even));
// // Expected output: true


// sort() - method sorts the elements of an array in place and returns the reference to the same array,

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// //  output: Array ["Dec", "Feb", "Jan", "March"]
// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// // output: Array [1, 100000, 21, 30, 4]


// splice() -method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// //  output: Array ["Jan", "Feb", "March", "April", "June"]
// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // output: Array ["Jan", "Feb", "March", "April", "May"]


// toLocaleString -method returns a string representing the elements of the array.

// const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
// const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });
// console.log(localeString);
//  output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary


// toReversed- method of Array instances is the copying counterpart of the reverse() method

//  const items = [1, 2, 3];
//  console.log(items); // [1, 2, 3]
//  const reversedItems = items.toReversed();
// console.log(reversedItems); // [3, 2, 1]
// console.log(items); // [1, 2, 3]


// toSorted()- of Array instances is the copying version of the sort() method

// const months = ["Mar", "Jan", "Feb", "Dec"];
// const sortedMonths = months.toSorted();
// console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
// console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(sortedValues); // [1, 2, 10, 21]
// console.log(values); // [1, 10, 21, 2]

 

// toSpliced -method of Array instances is the copying version of the splice() method.

// const months = ["Jan", "Mar", "Apr", "May"];

// // Inserting an element at index 1
// const months2 = months.toSpliced(1, 0, "Feb");
// console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// // Deleting two elements starting from index 2
// const months3 = months2.toSpliced(2, 2);
// console.log(months3); // ["Jan", "Feb", "May"]

// // Replacing one element at index 1 with two new elements
// const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
// console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// // Original array is not modified
// console.log(months); // ["Jan", "Mar", "Apr", "May"]



// toString() -returns a string representing the specified array and its elements

// const array1 = [1, 2, 'a', '1a'];
// console.log(array1.toString());
// output: "1,2,a,1a"


// unshift() - adds the specified elements to the beginning of an array and returns the new length of the array.

// const array1 = [1, 2, 3];
// console.log(array1.unshift(4, 5));
// // output: 5
// console.log(array1);
// //  output: Array [4, 5, 1, 2, 3]



// values() - returns a new array iterator object that iterates the value of each item in the array

// const array1 = ['a', 'b', 'c'];
// const iterator = array1.values();
// for (const value of iterator) {
//   console.log(value);
// }

//  output: "a"
//  output: "b"
//  output: "c"


// with() - method of Array instances is the copying version of using the bracket notation to change the value of a given index

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
// console.log(arr); // [1, 2, 3, 4, 5]













