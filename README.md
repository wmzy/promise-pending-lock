# Promise pending lock

> Call an async function multi before the first resolve, only run once and share the result.

## install

```bash
npm install promise-pending-lock
```

## Usage

### Simple

```javascript
const promisePendingLock = require('promise-pending-lock');

function task() {
  return Promise.resolve({});
}

const fn = promisePendingLock(task);
Promise.all([fn(), fn()])
  .then(([r1, r2]) => {
    console.log(r1 === r2);// true
  });
```

### Hash param

```javascript
const promisePendingLock = require('promise-pending-lock');
const hash = require('object-hash');

function task() {
  return Promise.resolve({});
}

const fn = promisePendingLock(task, {hashParams: hash});
Promise.all([fn({foo: 'bar'}), fn({foo: 'bar'}), fn({foo: 'baz'})])
  .then(([r1, r2, r3]) => {
    console.log(r1 === r2);// true
    console.log(r1 === r3);// false
  });
```

### Clone result

```javascript
const _ = require('lodash/fp');
const promisePendingLock = require('promise-pending-lock');

function task() {
  return Promise.resolve({});
}

const fn = promisePendingLock(task, {cloneResult: _.cloneDeep});

Promise.all([fn(), fn()])
  .then(([r1, r2]) => {
    console.log(r1 === r2);// false
    console.log(_.equals(r1, r2));// true
  });
```

## TODO

- [ ] support UMD
- [ ] rm dependencies
