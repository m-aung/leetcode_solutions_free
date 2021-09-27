/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    let romanStr = ''
    const romanNum = {
        1000 : 'M',
        900 : 'CM',
        500 : 'D',
        400 : 'CD',
        100 : 'C',
        90 : 'XC',
        50 : 'L',
        40 : 'XL',
        10 : 'X',
        9 : 'IX',
        5 : 'V',
        4 : 'IV',
        1 : 'I'
    }
    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let startIndex = 0
    while(num > 0){
        if(num < nums[startIndex]) startIndex++
        else{
            num-= nums[startIndex]
        romanStr += romanNum[nums[startIndex]]
        console.log(num , romanStr)
        }
    }
    return romanStr
};

console.log(intToRoman(1994))