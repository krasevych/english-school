require('ts-node').register({
    project: "./tsconfig.json"
});
module.exports = require('./webpack.prod.ts');