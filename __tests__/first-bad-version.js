// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {firstBadVersion} = require(`../challenges${version}/first-bad-version.js`);
