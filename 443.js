/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0, start = 0;
for (let end = 0; end <= chars.length; end++) {
    if (end === chars.length || chars[end] !== chars[start]) {
        chars[write++] = chars[start];
        if (end - start > 1) {
            for (let digit of String(end - start)) {
                chars[write++] = digit;
            }
        }
        start = end;
    }
}
return write;
};