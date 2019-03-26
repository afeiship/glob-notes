# get-started
> Install by npm.


## install
```shell
npm i -S glob
```

## basic usage
```js
var glob = require('glob');
var files = glob.sync('{**,.*}');

console.log(files);
```
