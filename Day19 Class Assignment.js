var target = 25;
var array = [ 2,3,5,5,32,54,23,12,45,23,43,1,34,65,1,54,6,33,4,9,7 ];

for (var i = 0; i < array.length - 3; i++) {
    for (var j = i + 1; j < array.length - 2; j++) {
        for (var k = j + 1; k < array.length -1; k++) {
           for (var l = k + 1; l< array.length; l++) {

            // console.log(array[i],"array[i]", array[j],"array[j]", array[k],"array[k]" ,array[l],"array[l]")
            if (array[i] + array[j] + array[k] + array[l] == target) {
                console.log(array[i], array[j], array[k], array[l],"got it..")
            }
        }
    }
}
}