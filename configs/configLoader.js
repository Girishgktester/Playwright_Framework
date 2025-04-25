const { ENV = 'dev' } = process.env;  // Default to 'dev' if ENV is not set
const config = require(`./${ENV}`);

module.exports = config;
