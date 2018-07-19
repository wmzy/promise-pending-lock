const identity = v => v;

/**
 * 对同一个异步任务的多次调用同时只执行一次，并共享同一结果
 * @param asyncFn {function(...[*])}
 * @param [options] {object}
 * @returns {function(...[*])}
 */
export default function promisePendingLock(asyncFn, {
  hashParams = identity,
  cloneResult = identity
} = {}) {
  const waiterMap = Object.create(null);
  return (...params) => {
    const pk = hashParams(params);
    if (!waiterMap[pk]) {
      waiterMap[pk] = [];
      asyncFn(...params)
        .then(r => {
          const waiters = waiterMap[pk];
          delete waiterMap[pk];
          waiters.forEach(([res]) => res(cloneResult(r)));
        })
        .catch(e => {
          const waiters = waiterMap[pk];
          delete waiterMap[pk];
          waiters.forEach(([, rej]) => rej(cloneResult(e)));
        });
    }
    return new Promise((res, rej) => {
      waiterMap[pk].push([res, rej]);
    });
  };
};
