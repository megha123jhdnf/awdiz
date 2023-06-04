// Q Given an target find threee number from array which addition is target . 
var target=93;
var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7, 91, 1, 1];


for (var i = 0; i < array.length - 2; i++) {
    // console.log(array[i])
    for (var j = i + 1; j < array.length - 1; j++) {
        console.log(array[i],"- array[i]",array[j],"- array[j]")
        console.log(array[i] + array[j], "- total", target)

        if(array[i] + array[j] == target){
            console.log(array[i] , array[j],"got it")
         }
    }
}





// for(var i=0; i< array.lenth -2;i++) {
// //     // console.log(array[i])
// // }
// for (var j = i + 1; j < array.length - 1; j++) {
//     for (var k = j + 1; k < array.length; k++) {
//         console.log(array[i],"array[i]", array[j],"array[j]", array[k],"array[k]")
//         if (array[i] + array[j] + array[k] == target) {
//             console.log(array[i], array[j], array[k], "got it..")
//         }
//     }
// }
// }

