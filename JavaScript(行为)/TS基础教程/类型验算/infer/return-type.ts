// 获取方法的返回值类型
// type Return<T> = ???
// 1. type Return<T> = T是一个函数 ? 函数的返回值类型 : T
// 2. type Return<T> = T extends (...args:any[])=> ? 函数的返回值类型 : T
// 3. type Return<T> = T extends (...args:any[])=> infer R ?  R : T

type Return<T> = T extends (...args: any[]) => infer R ? R : T;
type sum = (a: number, b: number) => number;
type concat = (a: any[], b: any[]) => any[];
// ReturnType 为官方内置的类型
let sumResult: Return<sum>; // number
let concatResult: Return<concat>; // any[]
