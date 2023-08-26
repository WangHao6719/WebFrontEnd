// type Watcher = {
//   on(eventName: string, callback: (oldValue: any, newValue: any) => void): void;
// };
// declare function watch<T>(obj: object): Watcher;
// const personWatcher = watch({
//     firstName: "San",
//     lastName: "Zhang",
//     age: 18,
//   });
//   personWatcher.on("firstNameChanged", (oldValue, newValue) => {});
//优化Ts类型推导
// 1.优化Watcher ,模版字符串
// 优点:使eventName只能是firstNameChanged lastNameChanged ageChanged
// 缺点:不够灵活,如果有其他的属性,就不行了 例如:sexChanged 会报错
// type Watcher = {
//   on(
//     eventName: `${"firstName" | "lastName" | "age"}Changed`,
//     callback: (oldValue: any, newValue: any) => void
//   ): void;
// };
// declare function watch<T>(obj: object): Watcher;
// const personWatcher = watch({
//   firstName: "San",
//   lastName: "Zhang",
//   age: 18,
// });
// personWatcher.on("ageChanged", (oldValue, newValue) => {});

// 2.优化Watcher ,动态读取字符串 使用泛型 T 用法keyof T
// 优点:更加灵活,不会报错
// 注意: string & keyof T 交叉类型 去除Symbol类型
// type Watcher<T> = {
//   on(
//     eventName: `${string & keyof T}Changed`,
//     callback: (oldValue: any, newValue: any) => void
//   ): void;
// };
// declare function watch<T>(obj: T): Watcher<T>;
// const personWatcher = watch({
//   firstName: "San",
//   lastName: "Zhang",
//   age: 18,
//   sex: "男",
// });
// personWatcher.on("sexChanged", (oldValue, newValue) => {});

// 3.动态约束oldValue newValue的类型
// 优点:动态约束oldValue newValue的类型
// 缺点:可能导致两个值不一致 例如:personWatcher.on<"firstName">("sexChanged", (oldValue, newValue) => {});
// type Watcher<T> = {
//   on<K extends string & keyof T>(
//     eventName: `${string & keyof T}Changed`,
//     callback: (oldValue: T[K], newValue: T[K]) => void
//   ): void;
// };
// declare function watch<T>(obj: T): Watcher<T>;
// const personWatcher = watch({
//   firstName: "San",
//   lastName: "Zhang",
//   age: 18,
//   sex: "男",
// });
// personWatcher.on<"firstName">("sexChanged", (oldValue, newValue) => {});

//4. personWatcher.on<"firstName">("sexChanged", (oldValue, newValue) => {}); 优化 使两个值一致

type Watcher<T> = {
  on<K extends string & keyof T>(
    eventName: `${K}Changed`,
    callback: (oldValue: T[K], newValue: T[K]) => void
  ): void;
};
declare function watch<T>(obj: T): Watcher<T>;
const personWatcher = watch({
  firstName: "San",
  lastName: "Zhang",
  age: 18,
  sex: "男",
});
personWatcher.on("firstNameChanged", (oldValue, newValue) => {});
