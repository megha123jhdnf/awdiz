// Q . Find two numbers from given array which addition is equal to target 

// var target = 105;

// var array2 = [23, 345, 565, 65, 40, 40]
// for (var i = 0; i < array2.length; i++) {
//     // console.log(array[i])
//     for (var j = i + 1; j < array2.length; j++) {
//         if (array2 [i] + array2 [j] == target) {
//             console.log(array2 [i], array2 [j], "got!")
//         }
//         console.log(array2 [i], " + ", array2 [j], " = " ,array2 [i] + array2 [j])
//     }
// }


// Q. Find subtraction of give two numbers by using function. 

// var number1 = 9876;
// var number2 = 5678;
// function subtraction(){
//        var sub = number1 - number2;
//        console.log(sub,"subtraction")
// }
// subtraction()



// Q. Find multiplication of give two numbers by using function. 

// var number3 = 9876;
// var number4 = 5678;
// function multiplication(){
//     var mul= number3 * number4;
//        console.log(mul,"multiplication")


// }
// multiplication()


// Q. Find dividation of give two numbers by using function. 

// var number5 = 9876;
// var number6 = 5678;
// function divid(){
//     var div = number5 / number6;
//        console.log(div," divid")


// }
// divid()
// Q. Find three numbers from given array who's addition is equal to target.


var array = [34,45,56,67,78,34,76,234,567,7834,56,34];
var target = 112;

function additionOfThreeNumbers(array,target) { 
    var flag = false;
    for (var i = 0; i < array.length - 2; i++) {
        for (var j = i + 1; j < array.length-1; j++) {
            for (var k = j + 1; k < array.length; k++) {

            if (array[i] + array[j] + array[k]== target) {
                console.log(array[i], array[j] ,array[k])
                flag = true;
            }
           
        }
    }
    

    }
    if (flag == false){
        console.log(" addition of three number is not possible")
    }
}
additionOfThreeNumbers(array,target) ;