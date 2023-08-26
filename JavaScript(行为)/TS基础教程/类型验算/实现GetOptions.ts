//实现某个类型里的可选字段
interface ComplexObject {
  mandatory: string;
  optional?: number;
  optional2?: boolean;
}
type GetOptional<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};
type Optionals = GetOptional<ComplexObject>;
const optionals: Optionals = { optional: 1 };
// { optional?: number }

// keyof T 会返回一个由 T 的属性名组成的联合类型。
// 例如，keyof { name: string; age: number } 的结果为 "name" | "age"。
// type Demo = { name: string; age: number };
// type Demo2 = keyof Demo;
//Demo2的结果为 "name" | "age"
// const demo2: Demo2 = "name"; //正确
// const demo3: Demo2 = "age"; //正确
// const demo4: Demo2 = "sex"; //报错 不能将类型“"sex"”分配给类型“keyof Demo”
//K in keyof T  会遍历T的所有属性名
//例如: K in keyof { name: string; age: number } 的结果为 "name" | "age"。
// type Demo = { name: string; age: number };
// type Demo2 = {
//   [K in keyof Demo]: string;
// };
//Demo2的结果为 { name: string; age: string }

// as 起别名 例如: [K in keyof Demo as `get${Capitalize<string & K>}`]: string;
// 注意: Capitalize 首字母大写
// type Demo = { name: string; age: number };
// type Demo2 = {
//   [K in keyof Demo as `get${Capitalize<string & K>}`]: string;
// };
//Demo2的结果为 { getName: string; getAge: string }

// 条件判断 三元表达式 例如: [K in keyof Demo as Demo[K] extends string ? K : never]: string;
// 注意: extends string ? K : never 如果Demo[K]是string类型,则返回K,否则返回never  never表示永远不会出现的值
// type Demo = { name: string; age: number };
// type Demo2 = {
//   [K in keyof Demo as Demo[K] extends string ? K : never]: string;
// };
// 由于age是number类型,所以返回never
// 由于never表示永远不会出现的值,所以Demo2的结果为 { name: string; }
