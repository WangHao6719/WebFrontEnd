// 获取数组没意向的类型
type ArrayItem<T> = T extends (infer U)[] ? U : T;

type Item1 = ArrayItem<[number, string]>; // number | string
type Item2 = ArrayItem<number[]>; // number
