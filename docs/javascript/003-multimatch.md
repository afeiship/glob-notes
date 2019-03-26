# multimatch
> Extends minimatch.match() with support for multiple patterns.

## install
```shell
npm install -S multimatch
```

## usage
```js
const multimatch = require('multimatch');
multimatch(['unicorn', 'cake', 'rainbows'], ['*', '!cake']);

//=> ['unicorn', 'rainbows']
```

## resources
- https://github.com/sindresorhus/multimatch
