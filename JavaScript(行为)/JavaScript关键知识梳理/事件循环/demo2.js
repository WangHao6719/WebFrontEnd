
// 死循环是将主线程彻底占用，其它所有事情不在处理
// 跑出异常只会影响下面的同步任务，已经放置在队列当中的任务会继续执行
setTimeout(() => {
    console.log(1)
}, 0)

console.log(2)
while (true) { } //2
// throw new Error('手动抛出异常') // 2 1
console.log(3)
setTimeout(() => {
    console.log(4)
}, 10)
console.log(5)