"use strict";
module.exports = env => env.dev ? require('./config/webpack.dev.js') : require('./config/webpack.prod.js');
