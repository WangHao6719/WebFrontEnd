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
