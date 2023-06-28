//  const nums1 = [1,2,2,1]
//  const nums2 = [2,2]
// //   Output: [2,2]


const nums1=[4,9,5]
const nums2=[9,4,9,8,4]
//  Output:[9,4]
//  [4,9]



function intersection(nums1,nums2){
    return nums1.filter(Element => nums2.includes(Element));
}         

const intersectionArray = intersection(nums1,nums2);
console.log(intersectionArray)













// eg of include
// const nums=[2,4,5,6]
// console.log(nums.includes(4));
