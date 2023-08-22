# TypeScript高级类型：联合类型、交叉类型和类型别名

## 联合类型

>联合类型是最常见的高级类型之一，是指一个变量可以有不同的数据类型，通过 | 符号来表示，它的目的是将多个类型组合成一个类型。这些类型可以是基本类型，也可以是自定义类型。
>
>```js
>// 联合类型的基本用法
>let myVar: string | number;
>myVar = 'hello';
>myVar = 123;
>```
>
>在这里，我们定义了一个 myVar 变量，它可以是字符串或数字类型。我们可以将任何一个字符串或数字赋给 myVar 变量。
>联合类型用于在编写代码时可以接受多种类型的情况。例如，如果我们希望接受一个参数，它可能是字符串或数字，我们可以使用联合类型。示例如下：
>
>```js
>// 在函数的形参中使用联合类型
>function printId(id: number | string) {
>    console.log(`id is ${id}`);
>}
>printId(101); // 输出：id is 101 
>printId("abc"); // 输出：id is abc
>```
>
>在上面的代码中，我们定义了一个名为 printId 的函数，它接受一个参数 id ，它可以是数字或字符串。
>
>```js
>// 自定义类型
>interface Cat {
>    name: string;
>    purr: () => void;
>}
>interface Dog {
>    name: string;
>    bark: () => void;
>}
>function feedPet(pet: Cat | Dog) {
>    console.log("Feeding " + pet.name);
>    if ("purr" in pet) {
>        pet.purr();
>    } else if ("bark" in pet) {
>        pet.bark();
>    }
>}
>```
>
>在这个例子中，我们定义了一个 feedPet 函数，它接受一个参数 pet ，这个参数是 Cat 或 Dog 类型。当我们调用这个函数时，我们可以传递一个猫或狗的对象。在函数体内，我们检查 pet 对象是否有“ purr ”或“ bark ”属性，然后相应
>地调用 pet 的方法。
>联合类型的优点是在一些情况下可以简化代码，但缺点是会降低代码的可读性和可维护性。当联合类型过多时，代码的复杂度会显著增加。

## 交叉类型

>交叉类型是将多个类型组合成一个类型，通过 & 符号来表示。这些类型可以同时拥有所有类型的属性和方法。我们可以将交叉类型看作是“并集”类型。示例如下：
>
>```js
>interface Person {
>    name: string;
>    age: number;
>}
>interface Employee {
>    company: string;
>}
>type EmployeePerson = Employee & Person;
>const employeePerson: EmployeePerson = {
>    name: "John",
>    age: 30,
>    company: "ABC Inc",
>};
>console.log(employeePerson); // 输出：{ name: 'John', age: 30, company: 'ABC Inc' }
>```
>
>在上面的代码中，我们定义了两个接口 Person 和 Employee 。Person 接口定义了一个人的属性（名称和年龄），而 Employee 接口定义了一个雇员的属性（公司）。我们使用 & 符号定义 EmployeePerson 类型，这个类型将 Person 和 Employee 类型组合成一个类型。最后，我们创建了一个 EmployeePerson 类型的对象，并输出它的属性。
>再来看一个例子：
>
>```js
>interface Student {
>    name: string;
>    age: number;
>}
>interface Teacher {
>    name: string;
>    teachingSubject: string;
>}
>type StudentTeacher = Student & Teacher;
>let jenny: StudentTeacher = {
>    name: 'Jenny',
>    age: 25,
>    teachingSubject: 'Math'
>}
>```
>
>在这里，我们定义了两个接口：Student 和 Teacher 。我们还定义了一个类型别名 StudentTeacher ，它是 Student 和 Teacher 的交集。然后我们创建一个 StudentTeacher 类型的变量 jenny ，它包含 name、age 和 teachingSubject 属性。
>交叉类型的优点是可以让我们快速定义具有多种属性和方法的对象类型，但缺点是当交叉类型过多时，代码的复杂度也会显著增加。

## 类型别名

>类型别名是一种命名类型的方式，是指为一种类型定义一个新名字。类型别名可以代替较长或重复的类型定义。在 TypeScript 中，我们可以使用 type 关键字 来创建类型别名。例如：
>
>```js
>type UserId = number | string;
>function printUserId(id: UserId) {
>    console.log(`id is ${id}`);
>}
>printUserId(101); // 输出：id is 101
>printUserId("abc"); // 输出：id is abc
>```
>
>在上面的代码中，我们使用type关键字定义了一个类型别名 UserId ，它可以是数字或字符串。我们定义了一个名为 printUserId 的函数来接受 UserId 类型的参数。最后，我们调用这个函数两次，分别传递数字和字符串参数。
>再来看一个例子
>
>```js
>type User = {
>    name: string;
>    age: number;
>    email: string;
>}
>type UserID = string | number;
>type UserCollection = Record<UserID, User>;
>let users: UserCollection = {
>    one: {
>        name: 'Tom',
>        age: 20,
>        email: 'tom@example.com'
>    },
>    two: {
>        name: 'Jerry',
>        age: 22,
>        email: 'jerry@example.com'
>    }
>}
>```
>
>在这里，我们定义了一个类型别名 User ，它代表一个用户对象，包含 name 、age 和 email 属性。我们还定义了一个类型别名 UserID ，它是字符串或数字类型。最后，我们定义了一个类型别名 UserCollection ，它是一个以 UserID 为键，User 为值的 Record 对象，表示一个用户集合。在示例中，我们创建了一个 UserCollection 对象 users ，包含两个用户对象，它们的 ID 分别为 one 和 two 。
>类型别名的优点是可以让我们轻松地定义复杂的类型，同时也可以让代码更加易读易懂。但缺点是过度使用类型别名会让代码变得冗长而难以维护。

## 注意

> TypeScript 高级类型的联合类型、交叉类型和类型别名各具优点，我们可以在不同场景下合理地使用它们。需要注意的是，过度使用高级类型会导致代码的复杂度增加，影响代码的可读性和可维护性。因此，在使用高级类型时需要慎重考虑。

## 结论

>在本文中，我们介绍了三种高级类型：联合类型、交叉类型和类型别名。这些类型可以帮助我们更好地编写可维护和可扩展的代码。我们建议您在编写代码时使用这些类型，以提高代码的可读性和可维护性。
