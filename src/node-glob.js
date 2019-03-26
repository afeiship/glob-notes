var glob = require('glob');
var files = glob.sync('{**,.*,**/.*/*}', { ignore: '{node_modules/**,.git}' });

console.log(files);
