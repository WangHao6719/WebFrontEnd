export interface Contact {
  name: string; // 姓名
  phone?: string; // 手机号
  email: string; // 邮箱
  avatar: string; // 头像
  userid: string; // id
}

export type WithName<T, P = string> = T | { name: P };
export type ContactWithName = WithName<Contact>;

//ContactWithName {
//  name: string; // 姓名
//}
function updateContact(contact: ContactWithName) {
  //   console.log(contact.phone);
  // 报错:  类型“{ name: string; }”上不存在属性“phone”。
}

// type U =
//   | {
//       name: string;
//       age: number;
//     }
//   | {
//       name: string;
//       sex: string;
//     };
// const u: U = {
//   name: "Jenny",
//   age: 25,
//   sex: "female",
// };
// u.name; // 正确
// u.sex; // 报错: 类型“{ name: string; age: number; }”上不存在属性“sex”。
// u.age; // 报错: 类型“{ name: string; sex: string; }”上不存在属性“age”。
//报错原因: 联合类型的值可以是任意一个类型,但是访问属性时,只能访问所有类型的共有属性

//解释 并集并的是值而不是属性
// 蔡徐坤粉{
//   鬼畜
//   篮球
// }
// 马保国粉{
//   鬼畜
//   太极
// }
// 蔡徐坤粉和马保国粉的并集 是指的那些人,而不是指的那些属性
// 比如 让蔡徐坤粉和马保国粉一起打篮球,这时候就会报错,因为马保国粉不会打篮球
// 而让蔡徐坤粉和马保国粉一起练太极,这时候就会报错,因为蔡徐坤粉不会练太极
// 而让蔡徐坤粉和马保国粉一起鬼畜,这时候就不会报错,因为蔡徐坤粉和马保国粉都会鬼畜
