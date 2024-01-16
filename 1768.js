/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i =0; let j =0;
       let merged =''
    while(i < word1.length && j <word2.length){
       merged += word1[i++] + word2[j++]
    }
    while (i < word1.length){
       merged += word1[i++]
    }
    while (j < word2.length){
           merged += word2[j++]
    }
    return merged
};
// 투포인터 활용