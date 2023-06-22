var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
console.log(numbers.sort())

var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
console.log(numbers.sort((a, b) => a - b))

 var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
console.log(numbers.sort((a, b) => b - a))



const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(username => {return username.length >= 6})

console.log(result);
