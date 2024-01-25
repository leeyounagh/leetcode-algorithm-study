/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let j =0;
  
    for(let i =0; i <t.length; i++){
        if(s[j] ===t[i] && j <s.length){
            j++;
        }
    }
    if(j ===s.length){
        return true
    }else{
        return false
    }
};