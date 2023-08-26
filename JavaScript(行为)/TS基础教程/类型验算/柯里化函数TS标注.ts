// declare function curry(fn: Function): Function;

// declare function curry<A, R>(fn: Function): Function;
// declare function curry<A extends any[], R>(fn: (...arg: A) => R): Function;
// 函数规格:没有参数 一个参数 多个参数
// 1.没有参数 () => R
// 2.一个参数 (X) => R
// 3.多个参数 (X) => 函数

type Curried<A, R> = A extends []
  ? () => R
  : A extends [infer ARG]
  ? (arg: ARG) => R
  : A extends [infer ARG, ...infer REST]
  ? (arg: ARG) => Curried<REST, R>
  : never;

declare function curryFun<A extends any[], R>(
  fn: (...arg: A) => R
): Curried<A, R>;

function sum(a: number, b: string, c: number) {
  return a + b + c + "=" + (a + c);
}
const curry = (fn: Function) => {
  const curried = (...args: any[]) => {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...args2: any[]) => {
        return curried(...args, ...args2);
      };
    }
  };
  return curried;
};

const currySum = curry(sum);

console.log(currySum(1)("+")(3));
