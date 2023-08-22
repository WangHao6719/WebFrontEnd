// Pick选取类型中指定类型
export interface Contact {
  name: string; // 姓名
  phone?: string; // 手机号
  email: string; // 邮箱
  avatar: string; // 头像
  userid: string; // id
}
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export interface ContactPick extends Pick<Contact, "name" | "phone"> {}
// ContactPick {
//   name: string;
//   phone?: string;
// }

// function updateContact(contact: ContactPick) {
//   console.log(contact.name);
// }
