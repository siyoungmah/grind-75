// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {MyQueue} = require(`../challenges${version}/queue-stacks.js`);

describe('queue-stacks tests', () => {

});