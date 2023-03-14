const { describe } = require("node:test");

// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {floodFill} = require(`../challenges${version}/flood-fill.js`);

describe('floodFill tests', () => {
  it('does not change the image when the starting pixel is already the target color', () => {
    expect(floodFill([[0,0,0], [0,0,0]],0,0,0)).toEqual([[0,0,0], [0,0,0]]);
  });
  it('works', () => {
    expect(floodFill([[1,1,1],[1,1,0],[1,0,1]],1,1,2)).toEqual([[2,2,2],[2,2,0],[2,0,1]]);
  });
});