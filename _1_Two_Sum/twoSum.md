# Question
> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
>
>You may assume that each input would have exactly one solution, and you may not use the same element twice.
>
>You can return the answer in any order.
>   2 <= nums.length <= 104
>   -109 <= nums[i] <= 109
>   -109 <= target <= 109
>   ***Only one valid answer exists.***

## Thoughts before Coding
>   Input: nums = [2,7,11,15], target = 9
>   Output: [0,1]
>   Output: Because nums[0] + nums[1] == 9, we return [0, 1].

    Use linear search algorithm to find the difference of each element. Need a cache to store the difference. During iteration, check the current difference exists in the cahce or not. Store it in the cache unless found in it. If found, return the indices of the two nums.
    Time complexity O(n)
        

## Pseudo Code
    - create a variable to store the cache obj
    - iterate from 0 index to last index
        - if the difference between current index and the target is not in the cache obj
            - store the current element in the cache as key and its index as value
        - since only one answer exist, 
        - if the difference is found in the obj as key,
            - return its value and current index as elements of an output array


## Sketch