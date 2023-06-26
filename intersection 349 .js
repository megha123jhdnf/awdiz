var nums1 = [1,2,2,1]
 var nums2 = [2,2]
//   Output: [2]

var intersection = function(nums1, nums2) {

    var set1 = new Set(nums1);
    var set2 = new Set(nums2);

    var output = [...set1].filter(x => set2.has(x))

    return output

}


