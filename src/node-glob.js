var glob = require('glob');
var cwd = process.cwd();
var files = glob.sync('{**,.*}', { ignore: '*_modules', cwd: cwd });

console.log(files);

// NOT WORK?! WHY?
// console.log(files);
