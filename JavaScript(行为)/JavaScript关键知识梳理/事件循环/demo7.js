async function async1() {
    console.log('1')
    await async2()
    console.log('2')
}
async function async2() {
    console.log('3')
}
console.log('4')
setTimeout(() => {
    console.log('5')
}, 0)
async1()
new Promise((resolve) => {
    console.log('6')
    resolve()
}).then(() => {
    console.log('7')
})
console.log('8')

// 首先输出数字 4。
// 将 setTimeout() 添加到任务队列中，不会立即执行。
// 执行 async1() 函数，输出数字 1。
// 遇到 await async2()，调用 async2() 函数，输出数字 3。
// async2() 函数执行完毕，async1() 函数继续执行，但await之后的代码并不立即执行，而是放到微任务队列中等待执行。
// 执行 new Promise()，输出数字 6。
// 输出数字 8。
// 微任务队列中的 async1() 函数剩余代码执行，输出数字 2。
// 微任务队列中执行 Promise.then() 的回调函数，输出数字 7。
// 最后，任务队列中的 setTimeout() 回调函数执行，输出数字 5。