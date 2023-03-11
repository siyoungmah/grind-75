// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {twoSum} = require(`../challenges${version}/two-sum.js`);

describe('twoSum test', () => {
  it('returns a duple array', () => {
    expect(twoSum([2,7,11,15], 9)).toHaveLength(2);
    expect(Array.isArray(twoSum([2,7,11,15], 9))).toEqual(true);
  })
  it('works', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual(expect.arrayContaining([1,0]));
    expect(twoSum([3,2,4], 6)).toEqual(expect.arrayContaining([1,2]));
    expect(twoSum([3,3], 6)).toEqual(expect.arrayContaining([1,0]));
  });
});