const assert = require("assert");
const isPalindrome = require("./palindromeChecker");

assert.strictEqual(isPalindrome("madam"), true);
assert.strictEqual(isPalindrome("racecar"), true);
assert.strictEqual(isPalindrome("A man, a plan, a canal: Panama"), true);
assert.strictEqual(isPalindrome("hello"), false);
assert.strictEqual(isPalindrome("JavaScript"), false);
assert.strictEqual(isPalindrome(""), true);

assert.throws(
  () => isPalindrome(12321),
  /Input must be a string/
);

console.log("All palindrome checker tests passed.");
