// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {validAnagram} = require(`../solutions${version}/valid-anagram.js`);

describe('valid-anagram tests', () => {
  it('returns true for two empty strings', () => {
    expect(validAnagram('','')).toEqual(true);
  });
  it('returns true for valid anagrams', () => {
    expect(validAnagram('anagram','nagaram')).toEqual(true);
  });
  it('returns false for non-anagrams', () => {
    expect(validAnagram('car','rat')).toEqual(false);
  });
});