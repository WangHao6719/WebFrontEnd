//Partial将类型中所有选项变为可选，即加上？
export interface Contact {
  name: string; // 姓名
  phone?: string; // 手机号
  email: string; // 邮箱
  avatar: string; // 头像
  userid: string; // id
}
/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};
export type PartialContact = Partial<Contact>;
// PartialContact{
//   name?: string; // 姓名
//   phone?: string; // 手机号
//   email?: string; // 邮箱
//   avatar?: string; // 头像
//   userid?: string; // id
// }
// function updateContact(contact: PartialContact) {
//   console.log(contact.name);
// }
