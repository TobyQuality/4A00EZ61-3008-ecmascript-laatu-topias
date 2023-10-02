console.log(Object.getOwnPropertyNames(String.prototype));

String.prototype.isPalindrome = function () {
  if (this.length >= 2) {
    for (var i = 0; i < this.length; i++) {
      if (this.charAt(i) !== this.charAt(this.length - 1 - i)) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

console.log("saippuakauppias".isPalindrome()); // true
console.log("abc".isPalindrome()); // false
