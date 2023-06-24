 const nums1=[1,2,2,1]
 const nums2=[2,2]
var intersection = function(nums1,nums2){
    const set1 = new setInterval(nums1);
    const set2 = new setInterval(nums2);

    const arr =[]
       
    for(let val of set1){
        if (set2.has(val)){
            
            arr.push(val)
        }
    }
}

console.log(arr);



