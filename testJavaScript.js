// async function async1() {
//     console.log('1')
//     await async2()
//     console.log('2')
// }
// async function async2() {
//     console.log('3')
// }
// console.log('4')
// setTimeout(() => {
//     console.log('5')
// }, 0)
// async1()
// new Promise((resolve) => {
//     console.log('6')
//     resolve()
// }).then(() => {
//     console.log('7')
// })
// console.log('8')


// let m = 5
// function foo(m) {
//     console.log('foo-m:' + m)
//     return function (n) {
//         console.log('fn-m:' + m)
//         console.log(n + (++m))
//         console.log('m:' + m, 'n:' + n)

//     }
// }
// let fn = foo(8)
// fn(10)
// foo(11)(13)
// fn(20)
// console.log(m)

// console.log(++9)
// let m = 10,
//     n = 10
// function foo(m) {
//     foo = function (n) {
//         console.log(m + n++)
//     }
//     console.log(m++)
// }
// foo(5)
// foo(7)
// foo(9)
// console.log('m:' + m)
// console.log('n:' + n)

// function Foo(m, n) {
//     let ret = m + n;
//     this.m = m;
//     this.n = n;
//     console.log(ret);
//     return ret
// }
// console.log(new Foo(1, 2));

// 01 普通函数调用
// let ret = Foo(10, 20)
// console.log(ret)

// 02 构造函数执行
// let res = new Foo(20, 20)
// console.log(res)

// var Person = function (name) {
//     this.name = name
// }
// 给没有实例对象的原型添加了方法
// Person.prototype.slogan = function () {
//     console.log('嘿嘿');
// }

// Person.prototype.sayName = function () {
//     console.log(this.name);
// }
// var p1 = new Person('李四')
// p1.slogan()
// p1.sayName()

// 实现一个 new 函数，函数的返回值，就是一个新对象
// function _new(Ctor, ...params) {
//     // 1: 创建一个新的 空对象
//     // let obj = {}
//     // 2：将这个对象的原型，指向构造函数的 prototype
//     // obj.__proto__ = Ctor.prototype

//     // 1+2  Object.create 方法，创建一个新对象，并将对象的原型指向 传入的对象
//     let obj = Object.create(Ctor.prototype)

//     // 3：将构造函数中的 this 执行当前这个新对象
//     // 固定 this 的执行 bind call
//     // 4:调用执行函数代码
//     let ret = Ctor.call(obj, ...params)
//     // 5:判断构造函数有没有返回值，有就用，没有，返回 obj
//     if (ret !== null && /^(object|function)$/.test(typeof ret)) return ret
//     return obj
// }
// const Person = function (name) {
//     this.name = name;
//     this.slogan = function () {
//         console.log('嘿嘿');
//     };
//     this.sayName = function () {
//         console.log(this.name);
//     }
// }
// let p1 = _new(Person, 'lisi')
// // let p1 = new Person('lisi')
// // p1.slogan()
// // p1.sayName()

// console.log(Object.getPrototypeOf(p1));
// console.log(p1.__proto__);
// console.log(p1.__proto__ === Person.prototype);
// console.log(p1 instanceof Person);
// console.log(p1.__proto__ === Object.getPrototypeOf(p1));


function Foo() {
    this.m = 10
    this.n = 24
    this.getM = function () {
        console.log(this.m)
    }
}
Foo.prototype.getM = function () {
    console.log(this.m)
}

Foo.prototype.getN = function () {
    console.log(this.n)
}

// let foo1 = new Foo
// let foo2 = new Foo

// console.log(Foo)
// console.log(Foo.prototype)
// console.log(Foo.__proto__)
// console.log(Foo.prototype.__proto__)
// console.log(Foo.prototype.constructor)
// console.log(Foo.prototype.__proto__.constructor)

// console.log(foo1.getM === foo2.getM)  // false
// console.log(foo1.getN === foo2.getN) // true
// console.log(foo1.__proto__.getN === Foo.prototype.getN) // true
// console.log(foo1.__proto__.getM === foo2.getM) // false
// console.log(foo1.getM === Foo.prototype.getM) // false
// console.log(foo1.constructor)
// foo1.getM()
// foo1.__proto__.getM()
// foo2.getN()
// foo2.__proto__.getN()

// Foo.prototype.getN()


// function a() {
//     console.log(1)
//     Promise.resolve().then(function () {
//         console.log(2)
//     })
// }
// setTimeout(function () {
//     console.log(3)
//     Promise.resolve().then(a)
// }, 0)
// Promise.resolve().then(function () {
//     console.log(4)
// })
// console.log(5)



// function a() {
//     console.log(1)
//     Promise.resolve().then(function () {
//         console.log(2)
//     })
// }
// setTimeout(function () {
//     console.log(3)
// }, 0)
// Promise.resolve().then(a)
// console.log(4)



// setTimeout(() => {
//     console.log('1');
//     new Promise((resolve) => {
//         console.log('2');
//         resolve();
//     }).then(() => {
//         console.log('3');
//     })
//     console.log('4');
// }, 0);
// function promise1() {
//     return new Promise((resolve) => {
//         console.log('5');
//         resolve();
//     })
// }
// async function async1() {
//     console.log('6');
//     await promise1();
//     console.log('7');
// }
// async1();
// console.log('8');

// 输出结果 6 5 8 2 4 7 3 1
