export interface Options {
  hashParams?: (arg: any) => any;
  cloneResult?: (arg: any) => any;
}

declare function promisePendingLock(fn: () => Promise<void>, opt?: Options): () => Promise<void>;
declare function promisePendingLock<TR>(fn: () => Promise<TR>, opt?: Options): () => Promise<TR>;
declare function promisePendingLock<T1>(fn: (arg1: T1) => Promise<void>, opt?: Options): (arg1: T1) => Promise<void>;
declare function promisePendingLock<T1, TR>(fn: (arg1: T1) => Promise<TR>, opt?: Options): (arg1: T1) => Promise<TR>;
declare function promisePendingLock<T1, T2>(fn: (arg1: T1, arg2: T2) => Promise<void>, opt?: Options): (arg1: T1, arg2: T2) => Promise<void>;
declare function promisePendingLock<T1, T2, TR>(fn: (arg1: T1, arg2: T2) => Promise<TR>, opt?: Options): (arg1: T1, arg2: T2) => Promise<TR>;
declare function promisePendingLock<T1, T2, T3>(fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<void>, opt?: Options): (arg1: T1, arg2: T2, arg3: T3) => Promise<void>;
declare function promisePendingLock<T1, T2, T3, TR>(fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<TR>, opt?: Options): (arg1: T1, arg2: T2, arg3: T3) => Promise<TR>;
declare function promisePendingLock<T1, T2, T3, T4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>, opt?: Options): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>;
declare function promisePendingLock<T1, T2, T3, T4, TR>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TR>, opt?: Options): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TR>;
declare function promisePendingLock<T1, T2, T3, T4, T5>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>, opt?: Options): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>;
declare function promisePendingLock<T1, T2, T3, T4, T5, TR>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TR>, opt?: Options): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TR>;

// tslint:disable-next-line:ban-types
declare function promisePendingLock(fn: Function, opt?: Options): Function;

export default promisePendingLock;
