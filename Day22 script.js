var num1= 2345;
var num2=8763;



// function subtraction() {
//     var sub = num1 - num2;
//     // console.log(sub, "subtracctionn")
//     if (sub > 0) {
//         return sub;
//     } else if (sub == 0) {
//         return "Sub is gretar than 0"
//     } 
//     // else {
//     //     return "Inside else"
//     // }

//     return "Sub is not equal to zero or not gretar than 0!"
//     // console.log("Loggin after return keyword")
// }
// var res = subtraction();
// console.log(subtraction())
// subtraction()

var target = 105;

var array2 = [23, 345, 565, 65, 40, 40]

function additionOfNumbers(samiksha, somesh) { // 2 step
    // console.log(samiksha,somesh,"insdie function")
    for (var i = 0; i < samiksha.length - 1; i++) {
        for (var j = i + 1; j < samiksha.length; j++) {
            if (samiksha[i] + samiksha[j] == somesh) {
                console.log(samiksha[i], samiksha[j])
            }
        }
    }
}

additionOfNumbers(array2, target); // 1 step


// console.table()
// typeof ()

