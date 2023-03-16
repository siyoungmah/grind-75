// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {insertInterval} = require(`../challenges${version}/insert-interval.js`);

describe('insert-intervals test', () => {
  it('works for insertion into empty intervals', () => {
    expect(insertInterval([], [5,7])).toEqual([[5,7]]);
  });
  it('works for simple insertion', () => {
    expect(insertInterval([[1,3],[6,9]], [2,5])).toEqual([[1,5],[6,9]]);
  });
  it('works for multiple merges', () => {
    expect(insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])).toEqual([[1,2],[3,10],[12,16]]);
  });
  it('works for inserting to end of array', () => {
    expect(insertInterval([[1,5]], [6,8])).toEqual([[1,5],[6,8]]);
    expect(insertInterval([[1,5]], [3,6])).toEqual([[1,6]]);
  });
  it('works for inserting to beginning of array', () => {
    expect(insertInterval([[3,5]], [1,2])).toEqual([[1,2],[3,5]]);
    expect(insertInterval([[1,5]], [2,6])).toEqual([[1,6]]);
  });
}); 