const path = require('path');

module.exports = {
  entry: {
	'getAll' : './javascript/getAll.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};