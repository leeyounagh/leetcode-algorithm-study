/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const wordArr = s.trim().split(/\s+/);
  return wordArr.reverse().join(" ");
};
