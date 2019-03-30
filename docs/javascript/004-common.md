# common
> Glob common usage snippets.

## exclude node_modules

```js
var globby = require('globby');

// use `!`
globby.sync(['**', '!node_modules']);

// OR use `options: ignore`
globby.sync(['**'], { ignore: ['node_modules'] });
```

## exclude .git

```js
var globby = require('globby');

// use `!`
globby.sync(['**'], { dot: true, ignore: ['.git/**', '**/.git/**', 'node_modules'] });

// OR use `options: ignore`
globby.sync(['**', '!.git/**', '!**/.git/**'], { dot: true, ignore: ['node_modules'] });
```
