[![Build Status](https://travis-ci.org/wmzy/promise-pending-lock.svg?branch=master)](https://travis-ci.org/wmzy/promise-pending-lock)
[![Coverage Status](https://coveralls.io/repos/github/wmzy/promise-pending-lock/badge.svg?branch=master)](https://coveralls.io/github/wmzy/promise-pending-lock?branch=master)
# Promise pending lock

> Call an async function multi before the first resolve, only run once and share the result.

## install

```bash
npm install promise-pending-lock
```

## Usage

### Simple

```javascript
import promisePendingLock from 'promise-pending-lock';

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

**Note**: If the task function has params, you should provide the `hashParams` function to transform the params array to a cache key.
By default, tread the params array as a string.
```javascript
import promisePendingLock from 'promise-pending-lock';
import hash from 'object-hash';

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
import _ from 'lodash/fp';
import promisePendingLock from 'promise-pending-lock';

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

## Integration with TypeScript

promise-pending-lock includes TypeScript definitions.

```typescript
import promisePendingLock from 'promise-pending-lock';
```

Use dtslint to check the definition file.

```bash
npm run dtslint
```
