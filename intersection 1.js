let intersectionArray = nums1.filter((curElem) =>{
    return nums2.includes(curElem);
});
console.log([...new set(intersectionArray)]);





