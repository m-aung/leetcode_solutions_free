# Question
>   Roman numerals are represented by seven different symbols: `I, V, X, L, C, D and M`.
>
>   | Symbol      | Value | 
>   | :---        |    :----:   | 
>   | I      | 1       | 
>   | V   | 5        | 
>   | X      | 10       | 
>   | L   | 50        | 
>   | C      | 100       | 
>   | D   | 500        | 
>   | M      | 1000       | 

>   | Additional Symbol      | Value | 
>   | :---        |    :----:   | 
>   | IV      | 4       | 
>   | IX   | 9        | 
>   | XL      | 40       | 
>   | XC   | 90        | 
>   | CD      | 400       | 
>   | CM   | 900        | 

## Thoughts before Coding

  Use Greedy Algorithm
  Iterate until num hits zero
  - check if the number equal to or more than 1000 
      - subtract 1000 and add `M` to the string and update the num to the result 
    - else if equal to or more than 900 
      - same as above replace 1000 with 900 and `M` with `CM` 
    - else if equal to or more than 500 
      - same as above replace 900 with 500 and `CM` with `D` 
    - else if equal to or more than 400 
      - same as above replace 500 with 400 and `D` with `CD` 
    - else if equal to or more than 100 
      - same as above replace 400 with 100 and `CD` with `C` 
    - else if equal to or more than 90 
      - same as above replace 100 with 90 and `C` with `XC` 
    - else if equal to or more than 50 
      - same as above replace 90 with 50 and `XC` with `L` 
    - else if equal to or more than 40 
      - same as above replace 50 with 40 and `L` with `XL` 
    - else if equal to or more than 10 
      - same as above replace 40 with 10 and `XL` with `X` 
    - else if equal to or more than 9 
      - same as above replace 10 with 9 and `X` with `IX` 
    - else if equal to or more than 5 
      - same as above replace 9 with 5 and `IX` with `V` 
    - else if equal to or more than 4 
      - same as above replace 5 with 4 and `V` with `IV` 
    - else if less than 4 
      - same as above replace 4 with 1 and `IV` with `I` 


## Pseudo Code
    - instantiate "**romanStr**" as ''
    - instantiate "**romanNum**" with symbols from table as values and its corresponding values as keys
    - instantiate "**nums**" with decending order of values such as '1000, 900, 500, 400, ..., 5, 4, 1'
    - instantiate "**startIndex**" as 0
    Iteration till num hits 0
      - if num < nums[startIndex]
        - increase startIndex by 1
      - else 
        - num = num - nums[startIndex]
        - romanStr concat with romanNum[nums[startIndex]]


## Sketch