// Link: https://leetcode.com/problems/valid-anagram/
// Difficulty: Easy
// Time: 15 min

/** 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1: 
Input: s = "anagram", t = "nagaram"
Output: true

Example 2: 
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const validAnagram = function(s, t) {
  // easy comparison
  if(s.length !== t.length) return false;
  
  // build up freqObject based on s
  const freqObj = {};
  for(const char of s){
    if (!freqObj.hasOwn(char)) freqObj[char] = 1;
    else freqObj[char]++;
  }

  // tear down based on t
  for(const char of t){
    if(!freqObj.hasOwn(char)) return false;
    else freqObj[char]--;
    if(freqObj[char] < 0) return false;
  }

  return Object.values(freqObj).reduce((prev,curr) => {
    return prev && curr === 0
  }, true);
};

module.exports = {validAnagram}