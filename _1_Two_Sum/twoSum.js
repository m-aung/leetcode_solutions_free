/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const differences = {}
    for(let i=0; i < nums.length; i++){
        console.log(differences[target-nums[i]])
        if(differences[target-nums[i]] !== undefined) return [differences[target-nums[i]],i]
        else{
            differences[nums[i]] = i
        }
    }
    return []
};
console.log(twoSum([2,7,11,15],9)) // [0,1]