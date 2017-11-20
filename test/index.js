const _ = require('lodash/fp');
const should = require('should');
const sinon = require('sinon');
const promisePendingLock = require('..');

describe('Promise pending lock', function () {
  it('should run once', async function () {
    const task = sinon.spy(() => Promise.resolve({}));

    const fn = promisePendingLock(task);
    const [r1, r2] = await Promise.all([fn(), fn()]);
    task.should.have.callCount(1);
    should.strictEqual(r1, r2);
  });

  it('should run multi times for difference params', async function () {
    const task = sinon.spy(() => Promise.resolve({}));

    const fn = promisePendingLock(task);
    const [r1, r2, r3] = await Promise.all([fn(), fn(), fn('foo')]);
    task.should.have.callCount(2);
    should.strictEqual(r1, r2);
    should.notStrictEqual(r1, r3);
  });

  it('should hashParams work', async function () {
    const task = sinon.spy(() => Promise.resolve({}));

    const fn = promisePendingLock(task, {hashParams: () => 'foo'});
    const [r1, r2, r3] = await Promise.all([fn(), fn(), fn('foo')]);
    task.should.have.callCount(1);
    should.strictEqual(r1, r2);
    should.strictEqual(r1, r3);
  });

  it('should run multi times for seq call', async function () {
    const task = sinon.spy(() => new Promise(res => setTimeout(res({}), 1)));

    const fn = promisePendingLock(task);
    const r1 = await fn();
    const r2 = await fn();
    task.should.have.callCount(2);
    should.notStrictEqual(r1, r2);
  });

  it('should clone result work', async function () {
    const task = sinon.spy(() => Promise.resolve({foo: {}}));

    const fn = promisePendingLock(task, {cloneResult: _.cloneDeep});
    const [r1, r2] = await Promise.all([fn(), fn()]);
    task.should.have.callCount(1);
    r1.should.deepEqual(r2);
    should.notStrictEqual(r1, r2);
    should.notStrictEqual(r1.foo, r2.foo);
  });
});

