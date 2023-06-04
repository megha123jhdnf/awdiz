// Assignment day 18
// Q Given an target find two number from array which subtration is target . 

var target = 93;
var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7];
// 100,7
for(i=0; i<array.length; i++){
    for(j=1; j<array.length;  j++){
        if(array[i]-array[j]==target){
            console.log(array[i],array[j],"target achieved")
        }
    }
}

// Q Given an target find threee number from array which additionation is target . 
//91,1,1
var target = 93;
var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7, 91, 1, 1];
for (i=0; i<array.length; i++) {
    for (j=i+1; j<array.length; j++) {
        for (k=j+1; k<array.length; k++) {
            if (array[i]+array[j]+array[k]==target) {
                console.log(array[i],array[j],array[k], "target achieved")
            }
        }
    }
}