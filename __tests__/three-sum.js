// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {threeSum} = require(`../challenges${version}/three-sum.js`);
