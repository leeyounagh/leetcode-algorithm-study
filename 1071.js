/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {

    function gcd(a, b) {
            if (b === 0) return a;
            return gcd(b, a % b);
        }
    
        if (str1 + str2 !== str2 + str1) {
            return '';
        }
    
        const lengthGCD = gcd(str1.length, str2.length);
        return str1.substring(0, lengthGCD);
     
    };
    // 유클리드 호재법 활용 최대공약수 구하기