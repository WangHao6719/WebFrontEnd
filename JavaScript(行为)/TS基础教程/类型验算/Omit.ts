// Omit去除类型中某些项
export interface Contact {
  name: string; // 姓名
  phone?: string; // 手机号
  email: string; // 邮箱
  avatar: string; // 头像
  userid: string; // id
}
/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export type OmitEmailContact = Omit<Contact, "email">;

// OmitEmailContact{
//   name: string;
//   phone?: string;
//   avatar: string;
//   userid: string;
// }
