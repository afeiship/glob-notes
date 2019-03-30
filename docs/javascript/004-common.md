# common

## exclude node_modules

```js
var globby = require('globby');
globby.sync(['**', '!node_modules']);
// OR
globby.sync(['**'], { ignore: ['node_modules'] });
```

## exclude .git

```js
var globby = require('globby');
globby.sync(['**'], { dot: true, ignore: ['.git/**', '**/.git/**', 'node_modules'] });
globby.sync(['**', '!.git/**', '!**/.git/**'], { dot: true, ignore: ['node_modules'] });
```
