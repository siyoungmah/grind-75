// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {updateMatrix} = require(`../challenges${version}/01-matrix.js`);
