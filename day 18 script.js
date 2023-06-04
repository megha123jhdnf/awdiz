// Q Given an target find two number from array which addition is target . 


 var target =132;
// var target =38;
var array = [3, 54, 65, 32, 6, 23, 56, 76, 17];
// var target = 93;
// var array = [3, 54, 65, 32, 6, 23, 56, 76, 17];
// // result "3 17"
for (var i = 0; i < array.length; i++) {
    // console.log(array[i])
    for (var j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] == target) {
            console.log(array[i], array[j], "got!")
        }
        console.log(array[i], " + ", array[j], " = " ,array[i] + array[j])
    }
}