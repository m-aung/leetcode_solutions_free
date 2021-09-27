/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    // set the closed one as keys in order to start the comparasion when a closed one is found
    let pairsMap = {
      ')' : '(',
      '}' : '{',
      ']' : '['
  };
  let stack = [];
  
  // validate input
  if(!s)
      return false;
  
  for(var i = 0; i<s.length; i++){
      let curChar = s.charAt(i);
      let topStack;
      if(pairsMap[curChar] !== undefined){
          topStack = (stack.length === 0) ? '' : stack.pop();
          if(topStack !== pairsMap[curChar]) return false;
      }else{
          stack.push(curChar);
      }
  }
  return stack.length === 0;
};

console.log(isValid('(([]))'))
console.log(isValid(']'))