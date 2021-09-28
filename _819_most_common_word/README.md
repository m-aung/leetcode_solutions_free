# Question
>   Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

>The words in paragraph are case-insensitive and the answer should be returned in lowercase.

## Thoughts before Coding

    Linear Search Algorithm
    banned is an array into a bannedStr to compare with each word
      split the words into array  
      make a cache obj to store the frequency of each word
      make mostFrequent as negative infinity or one
      make frequentStr variable to store the output string
      iterate the array
        - if the word is not the banned word
          - if the current word is not in the obj add the word into it and initialize the count as 1
            - if the current word count is greater than or equal to mostFrequent
              - assign frequentStr to current word
          -if the current word exist, increase the count by 1 and 
            - if the current word count is greater than or equal to mostFrequent
              - assign frequentStr to current word
      Finally return the frequentStr



## Pseudo Code
    Instantiate mostFrequent as 1
    Instantiate frequentStr as '' bannedStr as ''
    create a cache obj = {}
    split the input string with split(/[\W]/g) for non-word characters
    iterate the whole array 0 < i < array.length
      if the array[i] dose not include banned word
        if the array[i] is not in the obj 
          cache[array[i]] = 1
        else
          cache[array[i]] += 1
          if mostFrequent < cache[array[i]]
          frequentStr = array[i]
          mostFrequent = Math.min(mostFrequent, cache[array[i]])

    return frequentStr


## Sketch