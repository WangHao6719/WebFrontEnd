//基础JS-箭头函数
const double = (x) => x * 2;
// console.log(double(2)); // 4

//箭头函数没有this,supper,arguments因为没有this，所以无法通过任何方式绑定this
const obj = {
    name: '张三',
    sayName: function () {
        setTimeout(function () {
            console.log(this.name)
        })
    }
}
// obj.sayName(); // undefined

//改成箭头函数
const obj1 = {
    name: '张三',
    sayName: function () {
        setTimeout(() => {
            console.log(this.name)
        })
    }
}
// obj1.sayName(); // 张三
//箭头函数没有arguments，可以使用剩余参数代替
// const sum = (...args) => {
//     console.log(args)
// }
// sum(1, 2, 3) // [1, 2, 3]

//箭头函数没有原型对象
// const foo = () => { }
// console.log(foo.prototype) // undefined

//箭头函数不能用作构造函数，不能使用new关键字
const Foo = () => { }
// new Foo() // TypeError: Foo is not a constructor




