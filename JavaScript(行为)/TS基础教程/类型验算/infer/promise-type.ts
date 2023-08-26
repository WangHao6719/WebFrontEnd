// 取出 Promise 中泛型的类型
// type PromiseType<T> = ???;
// type PromiseType<T> = T extends Promise<infer R> ? R : T;

// type pt = PromiseType<Promise<string>>; // string
// type pt2 = PromiseType<Promise<number>>; // number

// const ptValue: pt = "张三"; //正确
// const ptValue2: pt = 123; //报错 不能将类型“number”分配给类型“string”

// const pt2Value: pt2 = 123; //正确
// const pt2Value2: pt2 = "张三"; //报错 不能将类型“string”分配给类型“number”

// promise嵌套 promise
// type PromiseType<T> = T extends Promise<infer R> ? PromiseType<R> : T;

// type pt = PromiseType<Promise<string>>; // string
// type pt2 = PromiseType<Promise<number>>; // number

// const ptValue: pt = "张三"; //正确
// const ptValue2: pt = 123; //报错 不能将类型“number”分配给类型“string”

// const pt2Value: pt2 = 123; //正确
// const pt2Value2: pt2 = "张三"; //报错 不能将类型“string”分配给类型“number”
