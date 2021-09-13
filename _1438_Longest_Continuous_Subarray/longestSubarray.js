/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    //base case

    
    const compareFunc = (arr, target, ansArr)=>{
      if(arr.length < 1) return ansArr.length
      console.log(arr)
      for(let i = 0; i < arr.length; i++){
        const diff = arr[0]- arr[i]
        if(diff <= target) ansArr = arr
      }
      return compareFunc(arr.slice(0, arr.length - 1),target,ansArr)
    }
    return compareFunc(nums,limit)
};

console.log(longestSubarray([8,2,4,7],4)) // 2
// console.log(longestSubarray([10,1,2,4,7,2],5)) // 4
// console.log(longestSubarray([4,2,2,2,4,4,2,2],0)) // 3
