//基础参数默认值
function foo(a, b = 2, c = 3) {
    console.log(a, b, c)
}
// foo() // undefined 2 3
// foo(1, null, undefined) // 1 null undefined

function bar(a, b = 2, c) {
    console.log(a, b, c)
}
// bar(1, 3) // 1 3 undefined
// bar(1, undefined, 3) // 1 2 3

//影响arguments
function baz(a, b) {
    // "use strict"
    // 2 true true false false
    console.log(arguments.length)
    console.log(a === arguments[0])
    console.log(b === arguments[1])
    a = 3
    b = 4
    console.log(a === arguments[0])
    console.log(b === arguments[1])
}
function baz1(a, b = 2) {
    console.log(arguments.length)
    console.log(a === arguments[0])
    console.log(b === arguments[1])
    a = 3
    b = 4
    console.log(a === arguments[0])
    console.log(b === arguments[1])
}
// baz(1, 3) // 2 true true true true
//形参改变，arguments也会变改变,严格模式下 arguments不会改变
// baz1(1, 3) // 2 true true false false
//添加了默认值，arguments不会改变,和严格模式下一样


// 影响函数length
// function foo0(a, b, c) { }
// console.log(foo0.length) // 3
// function foo1(a = 1, b, c) { }
// console.log(foo1.length) // 0
// function foo2(a, b = 2, c) { }
// console.log(foo2.length) // 1
// function foo3(a, b, c = 3) { }
// console.log(foo3.length) // 2
//length是形参的个数，只计算默认值前面的参数个数

//默认值表达式
// 默认值表达式是惰性求值的，只有在用到的时候才会执行
let n = 1;
function getVal() {
    return n++
}
function foo4(x, y = getVal()) {
    console.log(x, y)
}
// foo4(1, 2) // 1 2 在这里y = 2 不会执行 getVal()函数 n++, n = 2
// foo4(1) // 1 1 y = getVal() 会执行 getVal()函数 n++, n = 2
// foo4(1) // 1 2 y = 2 会执行 getVal()函数 n++, n = 3


// 默认值参数会形成临时死区，只有在参数位置之后才能使用
function getValue(v) {
    return v * 2
}
function foo5(x, y = getValue(x)) {
    console.log(x, y)
}
// foo5(1) // 1 2
//以上代码等价于,这种写法不会报错，不会形成临时死区
// function foo5(x, y) {
//     y = y || getValue(x)
//     console.log(x, y)
// }
function foo6(x = getValue(y), y) {
    console.log(x, y)
}
//这里的y是形成临时死区，所以会报错
// foo6(undefined, 1) // 报错 cannot access 'y' before initialization
// foo6() // 报错 cannot access 'y' before initialization




