/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  // 1. 인접한 두구역에 꽃이 심어지면 안된다.
  // 2. n이 주어졌을때 새로운 꽃을 n개 심을수 있다면 true 아니면 false

  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
      i++;
    }
  }

  return count >= n;
};
