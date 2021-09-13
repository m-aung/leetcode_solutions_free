# Question
> Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray such that the absolute difference between any two elements of this subarray is less than or equal to limit.

>
> Note: You can only move either down or right at any point in time.
>    
> - 1 <= nums.length <= 105
> - 1 <= nums[i] <= 109
> - 0 <= limit <= 109

## Thoughts before Coding

    make subarray and get difference of any two elements and compare it with the target limit 
    return the length of the subarray which difference is less than the target
    could use binary search and memoization for optimization

## Pseudo Code
    


## Sketch