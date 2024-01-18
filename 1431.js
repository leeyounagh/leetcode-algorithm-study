/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    //임의의 i번째 아이에게 내가가진 사탕을 몰빵해줬을때 i번째 아이가 가장많은 사탕을 가지면 true, 아니면 false
    let maxCandies = Math.max(...candies); 
    let result = candies.map(candy => candy + extraCandies>= maxCandies);
    return result;
};