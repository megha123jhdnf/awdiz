digits = [1,2,3]
// Output: [1,2,4]
var plusOne = function(digits) {
    for(i=digits.length-1; i>=0;i--){
        if(digits[i]<9) {
            digits[i]=digits[i]+1
             return digits
       }
       else{
           digits[i]=0
         }
    }
        
}
// console.log(digits)