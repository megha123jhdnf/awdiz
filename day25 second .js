// Q.Find numbers who are divisible by 2, 5, and 10 from given range,
//     then use that array to make new array with second element of array.
// (note - use reverse for loop)

var start = 65;
var end= 87;

function twostage(start,end){
    var fileredArray = [];
    var result = [];
    for(var i = start; i<= end;i++){
        if ([i] % 2 == 0 && [i] % 5 == 0 && [i] % 10 ==0){
            fileredArray.push([i]);
        }
    }
    console.log(fileredArray);
//     // for(var j=0; j<fileredArray.length;j++){
//     //     // console.log(fileredArray[j])
//     //     result.push(fileredArray[j=j+2])
//     }
//     // console.log(result)
 }
twostage(start,end);