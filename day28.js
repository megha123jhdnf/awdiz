// i
var nums = [0,1,2,3,2,2,3]
var removeDuplicate = function(nums){
for(i=0; i<nums.length;i++){
    if(nums[i] != nums[i + 1]){
       res.push(nums[i])
    }
}
// console.log(res,"res")
return res;
}

