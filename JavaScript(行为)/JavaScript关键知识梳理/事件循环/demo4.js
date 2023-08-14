// Promise 译为 承诺、许诺、希望，意思就是异步任务交给我来做，一定(承诺、许诺)给你个结果；从语法角度来说，Promise 就是一个对象或者叫容器，存放着一段代码(异步)的执行结果。

// Promise 本身具有三种状态，状态的修改只能由异步执行结果决定，任何其他操作都不能修改promise的状态。在具体执行的过程中，Promise 的状态为 pending ，异步执行成功调用成功态的回调函数后，状态改变为 Fulfilled , 这就是承诺给你的结果，并将异步执行的结果传入回调函数；异步执行失败调用失败态的回调函数后，状态是 Rejected， 这就是承诺给你的结果，并将失败的原因(异常接管)传入回调函数；

// Promise 对象的状态改变是不可逆的，且只有两种改变的可能：从 `pending` 变为 `fulfilled` 和从 `pending` 变为 `rejected` 。
// let p1 = new Promise(2)
// console.log(p1); // 报错

// new Promise 的时倾必须传入一个参数，且这个参数必须是一个函数
// 我们将这个函数称之为叫 executor 函数
// 这个函数接收二个参数(可选)，同时这个函数是立即执行的

// let p1 = new Promise(() => { })
// console.log(p1); // 正确
// console.log(1)

// let p1 = new Promise((resolve, reject) => {
//     console.log(2)
//     //! 异步操作
//     setTimeout(() => {
//         resolve('ok')
//         console.log('3')
//     }, 1000);
// })
// console.log(4)
// // 注入方法是同步的
// // .then 是一个异步 微任务 ，但是它放到 事件队列 中的时机是有讲究的
// p1.then((ret) => {
//     console.log('成功态--->', ret)
// }, (reason) => {
//     console.log('失败态--->', reason)
// })
// console.log(5)

let p1 = new Promise((resolve, reject) => {
    console.log(1)
    //! 异步操作
    setTimeout(() => {
        resolve('ok')
        console.log('2')
    }, 1000);
})

// 注入方法是同步的
// .then 是一个异步 微任务 ，但是它放到 事件队列 中的时机是有讲究的
p1.then((ret) => {
    console.log('成功态--->', ret)
}, (reason) => {
    console.log('失败态--->', reason)
})
console.log(3)