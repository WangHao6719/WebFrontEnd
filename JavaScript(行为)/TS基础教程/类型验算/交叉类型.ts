export interface Contact {
  name: string; // 姓名
  phone?: string; // 手机号
  email: string; // 邮箱
  avatar: string; // 头像
  userid: string; // id
}

export type WithId<T, P = string> = T & { id: P };
export type ContactWithId = WithId<Contact>;

function updateContact(contact: ContactWithId) {
  console.log(contact.id);
}

// updateContact({
//   name: "admin",
//   email: "",
//   avatar: "",
//   userid: "",
// });
// 报错: 类型 "{ name: string; email: string; avatar: string; userid: string; }" 中缺少属性 "id"，但类型 "{ id: string; }" 中需要该属性。

type U = {
  name: string;
  age: number;
} & {
  name: string;
  sex: string;
};
// const u: U = {
//   name: "Jenny",
// }; // 报错: 不能将类型“{ name: string; }”分配给类型“U”。 类型 "{ name: string; }" 中缺少属性 "age"，但类型 "{ name: string; age: number; }" 中需要该属性
// 报错原因 交叉类型的值必须同时满足所有类型的属性
const u: U = {
  name: "Jenny",
  age: 25,
  sex: "男",
}; // 正确

//解释 交集交的也是值而不是属性
// 蔡徐坤粉{
//   鬼畜
//   篮球
// }
// 马保国粉{
//   鬼畜
//   太极
// }
// 蔡徐坤粉和马保国粉的交集 是指的那些人,而不是指的那些属性
// 比如  蔡徐坤粉和马保国粉的交集就指的是既是蔡徐坤粉又是马保国粉的人这样的话这些人就得既会鬼畜又会打篮球又会练太极
