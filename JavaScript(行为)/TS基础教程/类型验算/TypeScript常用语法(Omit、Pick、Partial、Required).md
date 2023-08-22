# TypeScript 常用语法(Omit、Pick、Partial、Required)

> 比如有一个联系人列表
>
> ```javascript
> export interface Contact {
>   name: string; // 姓名
>   phone?: string; // 手机号
>   email: string; // 邮箱
>   avatar: string; // 头像
>   userid: string; // id
> }
> ```

## 1.Omit 去除类型中某些项

> 现在需要定义一个新的数据类型，新的联系人列表没有邮箱项
> 可以使用**Omit**，其源码如下
>
> ```javascript
> /**
> * Construct a type with the properties of T except for those in type K.
> */
> type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
> ```
>
> Omit 会**构造一个除类型 K 外具有 T 性质的类型**
> 可以看出需 Omit 要两个参数，Omit<type,string>：
> 参数：第一个为继承的 type 类型，第二个为想要的 key 的字符串，多个字符串用|分开
> 使用也很简单：
> **去除单个**，原始类型为联系人列表，新数据数据为没有邮箱项的联系人列表
>
> ```javascript
> export type OmitEmailContact = Omit<Contact, 'email' >;
> OmitEmailContact{
>  name: string;
>  phone?: string;
>  avatar: string;
>  userid: string;
> }
> ```
>
> **去除多个**，原始类型为联系人列表，新数据数据为没有邮箱项与头像的联系人列表
>
> ```javascript
> export type OmitEmailAvatarContact = Omit<Contact, 'email' | 'avatar'>;
> OmitEmailAvatarContact {
>  name: string;
>  phone?: string;
>  userid: string;
> }
> ```

## 2.Pick 选取类型中指定类型

> 现在联系人列表只要姓名电话即可
> 从 T 中选择一组属性，将它们在 K 中联合
>
> ```javascript
> type Pick<T, K extends keyof T> = {
>    [P in K]: T[P];
> };
> ```
>
> 使用如下
>
> ```javascript
> export interface ContactPick extends Pick<Contact, 'name' | 'phone'> {}
> ContactPick {
>  name: string;
>  phone?: string;
> }
> ```

## 3.Partial 将类型中所有选项变为可选，即加上？

> 可以使用**Partial**，其源码如下
>
> ```javascript
> /**
> * Make all properties in T optional
> */
> type Partial<T> = {
>    [P in keyof T]?: T[P];
> };
> ```
>
> 使用如下
>
> ```javascript
> export type PartialContact= Partial<Contact>
> PartialContact{
>  name?: string; // 姓名
>  phone?: string; // 手机号
>  email?: string; // 邮箱
>  avatar?: string; // 头像
>  userid?: string; // id
> }
> ```

## 4.Required 将类型中所有选项变为必选，去除所有？

> 可以使用**Required**，其源码如下
>
> ```javascript
> /**
> * Make all properties in T required
> */
> type Required<T> = {
>    [P in keyof T]-?: T[P];
> };
> ```
>
> 使用如下
>
> ```javascript
> export interface RequiredContact= Required<Contact>
> RequiredContact{
>  name: string; // 姓名
>  phone: string; // 手机号
>  email: string; // 邮箱
>  avatar: string; // 头像
>  userid: string; // id
> }
> ```
