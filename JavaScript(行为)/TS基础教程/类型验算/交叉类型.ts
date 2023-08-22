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
