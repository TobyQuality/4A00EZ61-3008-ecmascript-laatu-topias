function isPalindrome(word) {
  if (word.length >= 2) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("saippuakauppias"));
console.log(isPalindrome("joo"));
