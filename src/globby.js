var globby = require('globby');
var files = globby.sync(['**', '.*', '!node_modules']);

console.log(files);
