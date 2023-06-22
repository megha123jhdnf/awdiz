7var array = [{ id: 1, name: "Rahul", age: 23, surname: "xyz" },
{ id: 2, name: "Rakesh", age: 24, surname: "xyz" },
{ id: 3, name: "Swaraj", age: 25, surname: "xyz" },
{ id: 4, name: 'shweta', age: 29, surname: "xyz" }];

var userId = 2;
var selectedUser = array.find((user) => user.id == userId)
console.log(selectedUser);

var userAge = 29;
var selectedUser = array.find((object) => object.age == userAge);
console.log(selectedUser)

var userName = 'Rakesh';
var selectedUser = array.find((user) => user.name == userName);
console.log(selectedUser)

var userName = 'Rakesh';
var index = array.findIndex((result) => result.name == userName);
console.log(index)

array.map((object) => {
    console.log(object)
})

var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
console.log(numbers.sort())

var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
console.log(numbers.sort((a, b) => a - b))

 var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
console.log(numbers.sort((a, b) => b - a))


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(username => {return username.length >= 6})

console.log(result);
