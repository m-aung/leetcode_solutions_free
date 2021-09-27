/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
    let mostFrequent = 1, frequentWord = '', bannedStr = ''
    const wordsObj = {}
    for(word of banned){
        bannedStr += word
    }
    const wordsArr = paragraph.toLowerCase().split(/[\W]/g)
    console.log(wordsArr)
    if(wordsArr.length <= 1){
        if(bannedStr.includes(wordsArr[0])) return ''
        return wordsArr[0].toLowerCase()
    }

    for (word of wordsArr){
        if(!bannedStr.includes(word)){ 
            // if(!wordsObj[word]) wordsObj[word] = 1
            if(!wordsObj[word]) {
                wordsObj[word] = 1
                if(mostFrequent <= wordsObj[word]){
                    mostFrequent = wordsObj[word]
                    frequentWord = word
                }
            }  
            else{
                wordsObj[word]++
                if(mostFrequent <= wordsObj[word]){
                    mostFrequent = wordsObj[word]
                    frequentWord = word
                }
            }
        }
    }
    console.log(wordsObj)
    return frequentWord
};
console.log(mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.',['hit'])) // ball
console.log(mostCommonWord('A. ',[])) // a