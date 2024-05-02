// A Javascript solution for longest palindrome

// Function to print a subString str[low..high]
function printSubStr(str, low, high) {
  for (let i = low; i <= high; ++i) console.log(str[i]);
}

// This function prints the
// longest palindrome subString
// It also returns the length
// of the longest palindrome
function longestPalSubstr(str) {
  // Get length of input String
  let n = str.length;

  // All subStrings of length 1
  // are palindromes
  let maxLength = 1,
    start = 0;

  // Nested loop to mark start and end index
  for (let i = 0; i < str.length; i++) {
    console.log("i", i);
    for (let j = i; j < str.length; j++) {
      console.log("j", j);
      let flag = 1;

      console.log('(j - i + 1) / 2', (j - i + 1) / 2)
      // Check palindrome
      for (let k = 0; k < (j - i + 1) / 2; k++) {
        console.log('str[i + k]', str[i + k], i + k)
        console.log('str[j - k]', str[j - k], j - k)
        if (str[i + k] != str[j - k]) flag = 0;
      }

      // Palindrome
      if (flag != 0 && j - i + 1 > maxLength) {
        console.log('j - i + 1', j - i + 1)
        start = i;
        maxLength = j - i + 1;
      }
    }
  }

  console.log("Longest palindrome substring is: ");
  printSubStr(str, start, start + maxLength - 1);

  // Return length of LPS
  return maxLength;
}

// Driver Code
// let str = "forgeeksskeegfor";
let str = "forrof";
console.log("Length is: " + longestPalSubstr(str));

// This code is contributed by rag2127
