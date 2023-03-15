// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {maximumSubArray} = require(`../challenges${version}/maximum-subarray.js`);

describe('maximumSubArray tests', () => {

  it('works with positive numbers', () => {
    expect(maximumSubArray([5,4,6,7,8])).toEqual(30);
    expect(maximumSubArray([1])).toEqual(1);
  });
  it('works with negative numbers', () => {
    expect(maximumSubArray([-1, -2])).toEqual(-1);
    expect(maximumSubArray([-2, -1])).toEqual(-1);
    expect(maximumSubArray([-1, 0, -2])).toEqual(0);
  });
  it('works for positive and negative numbers', () => {
    expect(maximumSubArray([2,1,-3,4,-1,2,1,5])).toEqual(11);
    expect(maximumSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
    expect(maximumSubArray([5,4,-1,7,8])).toEqual(23);  
    expect(maximumSubArray([3,2,-3,-1,1,-2,-1])).toEqual(5);  
  });
});