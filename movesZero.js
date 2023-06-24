var movesZeroes =function(nums){
    let index = 0
    for(i = 0;i < nums.length; i++){
        if(nums[i] !=0){
            temp = nums[index]
            nums[index] = nums[i]
            nums[i] = temp
            index++
        }
    }
    return nums
}
console.log(index)