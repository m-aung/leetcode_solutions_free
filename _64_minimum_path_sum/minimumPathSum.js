/**
 * @param {number[][]} grid
 * @return {number}
 */

 // Version 1
/*
 var minPathSum = function(grid) {
    const m = grid.length
    const n = grid[0].length
    
    const tempArr = Array(n).fill(Infinity) 
    tempArr[0]= 0 // this is the base point to start
    
    for(let i=0; i< m; i++){
        for(let j=0; j< n; j++){
            const left = (j=== 0) ? Infinity : tempArr[j-1]
            const current = tempArr[j]
            // console.log('left: ', left)
            // console.log('current: ', current)
            tempArr[j] = grid[i][j] + Math.min(left,current)
            // console.log(`tempArr[${j}] after: `, tempArr[j])
            if(j === n -1) console.log(tempArr)
        }
    }
    return tempArr[n-1]

};
*/
//version 2
var minPathSum = function(grid) {
    const pathFinder = (arr, r, c, sum) => {
        // base case:
        if(r === arr.length) return sum
        if(r === 0 && c === 0){
            sum = arr[r][c]
            console.log('1st round')
            c++

        }
        if(c === arr[0].length) {
            c = 0
            r++
            console.log('1st')
        }

        // go right
        if( sum >= arr[r][c]) {
            sum += arr[r][c]
            c++
            // pathFinder(arr,r,c++,sum)
            console.log('sum is greater than ....')
        }
        else if( sum < arr[r][c]){
            c--
            r++
            console.log('sum is smaller than ....')
        }
        // r++
        console.log('sum:', sum)
        return pathFinder(arr,r,c,sum)

    }
    return pathFinder(grid,0,0,0)
}

// 1-3-1 = 5
// 1-5-1 = 7
// 4-2-1 = 7

// ? & === Infinity
// 0 -> & -> &
// 1  , 3  , 1
// 1 -> 4 -> 5 // [i-1] + min([i-1] | & , [i]) the first part is always consider as infinity for the first elements
// 1  , 5  , 1
// 2 -> 5 -> 1 

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])) // 7
// console.log(minPathSum([[1,3,1],[1,5,1],[4,2,2]])) // 8
