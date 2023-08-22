// Required将类型中所有选项变为必选，去除所有？
export interface Contact {
  name: string; // 姓名
  phone?: string; // 手机号
  email: string; // 邮箱
  avatar: string; // 头像
  userid: string; // id
}
/**
 * Make all properties in T required
 */
// type Required<T> = {
//   [P in keyof T]-?: T[P];
// };

type RequiredContact = Required<Contact>;
// RequiredContact{
//   name: string; // 姓名
//   phone: string; // 手机号
//   email: string; // 邮箱
//   avatar: string; // 头像
//   userid: string; // id
// }

function updateContact(contact: RequiredContact) {
  console.log(contact.avatar);
}
// updateContact({
//   name: "admin",
// });
//报错: 类型“{ name: string; }”缺少类型“Required<Contact>”中的以下属性: phone, email, avatar, userid
