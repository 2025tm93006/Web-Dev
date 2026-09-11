function isPalindrome(text) {
  if (typeof text !== "string") {
    throw new Error("Input must be a string");
  }

  const normalizedText = text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  return normalizedText === normalizedText.split("").reverse().join("");
}

module.exports = isPalindrome;
