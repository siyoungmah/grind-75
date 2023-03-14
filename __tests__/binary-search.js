// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {binarySearch} = require(`../challenges${version}/binary-search.js`);

describe('binary-search tests', () => {
  it('works for valid inputs', () => {
    expect(binarySearch([-1,0,3,5,9,12], 9)).toEqual(4);
  });
  
  it('return -1 when the target does not exist in the array', () => {
    expect(binarySearch([-1,0,3,5,9,12], 2)).toEqual(-1);
  });

  it('runs with O(log n) runtime complexity. Note! This test is a bit experimental.', () => {
    // create different benchmarks
    // O(log n)
    const binarySearchSublinear = (nums, target) => {
      const midIndex = Math.floor(nums.length / 2);
      if (target === nums[midIndex]) return midIndex;
      if (nums.length === 1) return -1;
      if (target > nums[midIndex]) {
        const index = binarySearchSublinear(nums.slice(midIndex), target);
        if (index === -1) return -1;
        else return midIndex + index;
      }
      else return binarySearchSublinear(nums.slice(0, midIndex), target);
    }
    // O(n) runtime
    const binarySearchLinear = (nums, target) => {
      for(let i = 0; i < nums.length; i++){
        if(nums[i] === target) return i;
      }
      return -1;
    }

    const bigInput = [];
    for (let i = 0; i < 10000; i++){
      bigInput.push(i);
    }
    
    // run each solution and take note of times
    const sublinearTimePre = performance.now();
    binarySearchSublinear(bigInput, 7500);
    const sublinearTimePost = performance.now();
    const sublinearTime = sublinearTimePost - sublinearTimePre;
    // console.log('sublinearTime: ', sublinearTime);
    
    const linearTimePre = performance.now();
    binarySearchLinear(bigInput, 7500);
    const linearTimePost = performance.now();
    const linearTime = linearTimePost - linearTimePre;
    // console.log('linearTime: ', linearTime);
    
    const testTimePre = performance.now();
    binarySearch(bigInput, 7500);
    const testTimePost = performance.now();
    const testTime = testTimePost - testTimePre;
    // console.log('testTime: ', testTime);

    // compare times to see if estimated time is closest to O(log n)
    expect(testTime).toBeLessThan(linearTime);
    expect(Math.abs(testTime - sublinearTime)).toBeLessThan(Math.abs(testTime - linearTime));
  });
});