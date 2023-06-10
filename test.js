// 1.
var array =[2,3,55,6,67,78,23,5,67,78,43,67,34,6,74,7,45,23,45,78,89,34,23]
 var target = 54;


for (var i = 0; i < array.length; i++) {
    // console.log(array[i])
    for (var j = i + 1; j < array.length; j++) {
        for (var k= j + 1; k < array.length; k++) {
            for (var l = k + 1; j < array.length; l++) {
                for (var m = l + 1; m < array.length; m++) {



        if (array[i] + array[j] +array[k] +array[l] +array[m]== target) {
            console.log(array[i], array[j],array[k],array[l],array[m] ,"got!")
        }
        console.log(array[i], " + ", array[j]," + ",array[k] ," + ",array[l]," + ",array[m],"= " ,array[i] + array[j]+array[k]+array[l]+array[m])
    }
}
}
    }
    
}



// 2.
// var array2=[2,3,55,6,67,78,23,5,67,78,43,67,34,6,74,7,45,23,45,78,89,34,23];
// var target2= 236028;


// var target = 105;

// var array2 = [23, 345, 565, 65, 40, 40]

// function multificationOfNumbers(meghali, rajesh) { 
   
//     for (var i = 0; i < meghali.length - 1; i++) {
//         for (var j = i + 1; j < meghali.length; j++) {
//             if (meghali[i] * meghali[j] == rajesh) {
//                 console.log(meghali[i], meghali[j])
//             }
//         }
//     }
// }

// multificationOfNumbers(array2, target); // 1 step


// console.table()
// typeof ()
 


// 3.

// var array1 = [2,3,5,5,32,54,23,12,45,23,43,1,34,65,1,54,6,33,4,9,7];
// var target = "first output";

// var array2 = [2,3,5,56,23];
// var target1 ="second output";

// function countOddNumber(array,position) {
//     for (var i=0; i< array.length;i++){
//         if((array[i]%2)==1){
//             console.log(array[i],position);

//         }
//     }
    
// }
// // for array1
// countOddNumber(array1,target);

// // for array2
// countOddNumber(array2,target1);


