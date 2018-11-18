// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels.
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  // do code to count vowels
  const check = ["a","e","i","o","u"];
  var count = 0;
  var split = str.split("")
    split.forEach(function(char){
      if(check.includes(char)) count++;
    })
    return count
}

console.log(getCount("Hello"))

function getCount(str) {
    // do code to count vowels
    const check = ['a','e','i','o','u'];
    var count = 0;
    for(let char of str.toLowerCase())
    {
      if(check.includes(char)) count++;
    }
    return count;
}

console.log(getCount("Hello"))

