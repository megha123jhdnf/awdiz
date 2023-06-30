var findLengthOfLCIS = function (nums) {

    var sequenceCountArr =[];
    var count=1;

    for(i=0; i < nums.length; i++){

        if(nums[i+1] > nums[i]){
            count =count++;


        }
        else{
            sequenceCountArr.push(count)
            count =1

        }
    }    
}
 return Math.max(sequenceCountArr)