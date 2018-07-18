// TypeScript Version: 2.9

import promisePendingLock from "promise-pending-lock";

function ignore() {}

// $ExpectType: () => Promise<void>
promisePendingLock(() => new Promise<void>(ignore));

// $ExpectType: () => Promise<number>
promisePendingLock(() => new Promise<number>(ignore));

// $ExpectType: (arg1: number) => Promise<void>
promisePendingLock((arg1: number) => new Promise<void>(ignore));

// $ExpectType: (arg1: number) => Promise<number>
promisePendingLock((arg1: number) => new Promise<number>(ignore));

// $ExpectType: (arg1: number, arg2: number) => Promise<void>
promisePendingLock((arg1: number, arg2: number) => new Promise<void>(ignore));

// $ExpectType: (arg1: number, arg2: number) => Promise<number>
promisePendingLock((arg1: number, arg2: number) => new Promise<number>(ignore));

// $ExpectType: (arg1: number, arg2: number, arg3: number) => Promise<void>
promisePendingLock((arg1: number, arg2: number, arg3: number) => new Promise<void>(ignore));

// $ExpectType: (arg1: number, arg2: number, arg3: number) => Promise<number>
promisePendingLock((arg1: number, arg2: number, arg3: number) => new Promise<number>(ignore));

// $ExpectType: (arg1: number, arg2: number, arg3: number, arg4: number) => Promise<void>
promisePendingLock((arg1: number, arg2: number, arg3: number, arg4: number) => new Promise<void>(ignore));

// $ExpectType: (arg1: number, arg2: number, arg3: number, arg4: number) => Promise<number>
promisePendingLock((arg1: number, arg2: number, arg3: number, arg4: number) => new Promise<number>(ignore));

// $ExpectType: (arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => Promise<void>
promisePendingLock((arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => new Promise<void>(ignore));

// $ExpectType: (arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => Promise<number>
promisePendingLock((arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => new Promise<number>(ignore));

promisePendingLock(() => new Promise<void>(ignore), {});

promisePendingLock(() => new Promise<void>(ignore), {
  cloneResult: (v) => v,
  hashParams: (v) => v
});
