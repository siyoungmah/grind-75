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
const validAnagram = function(s: string, t: string): boolean {
  // easy case
  if(s.length !== t.length) return false;

  // build a freq object based on s
  const freqObj: {[key:string]:number} = {};
  for(const char of s){
    if(!freqObj.hasOwnProperty(char)) freqObj[char] = 1;
    else freqObj[char]++;    
  }

  // tear down freqObj based on t
  for(const char of t){
    if(!freqObj.hasOwnProperty(char)) return false;
    else{
      freqObj[char]--;
      if(freqObj[char] < 0) return false; 
    }
  }

  // check freqObj to make sure that all keys have value of 0
  return Object.values(freqObj).filter(x => x !== 0).length === 0;
};

// 15 min

module.exports = {validAnagram}