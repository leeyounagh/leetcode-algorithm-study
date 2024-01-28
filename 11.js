/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  //     x*y =최대용량
  // x = 우측변 y의 인덱스 - 좌측변 x의 인덱스

  let i = 0;
  let j = height.length - 1;
  let maxNum = 0;
  while (i < j) {
    const y = Math.min(height[i], height[j]);
    const x = j - i;
    maxNum = Math.max(maxNum, x * y);

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxNum;
};
