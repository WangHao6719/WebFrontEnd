// 获取函数的第一个参数的类型
type FirstArg<T> = T extends (arg: infer U, ...rest: any[]) => any ? U : T;

type T1 = FirstArg<(arg: number, arg2: string) => number>; // number
type T2 = FirstArg<() => void>; // unknown
type T3 = FirstArg<(arg?: boolean) => void>; // boolean | undefined

const firstArg1: T1 = 1; // number
// const firstArg2: T2 = 1; // unknown
// const firstArg3: T3 = 1; // Error 不能将类型“1”分配给类型“boolean | undefined”
