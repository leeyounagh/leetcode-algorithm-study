/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let leftArr = nums1.filter((n)=>!nums2.includes(n));
    let rightArr =nums2.filter((n)=>!nums1.includes(n));


    let deleteLeftDuplicate = [...new Set(leftArr)]
    let deleteRightDuplicate = [...new Set(rightArr)]

    return [deleteLeftDuplicate,deleteRightDuplicate]

};