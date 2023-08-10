/**
 * 打印传递的所有参数之和
 */
function sum(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i]
    }
    console.log(result)
}
// 期望的调用方式如下：
// sum(1, 2, 3) // 6
// sum(1, 2, 3, 4) // 10
// sum(1, 2, 3, 4, 5) // 15

// 改变打印类型
function sum(printType, ...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i]
    }
    console[printType](result)
}
sum('log', 1, 2, 3) // 6
sum('warn', 1, 2, 3, 4) // 10
sum('error', 1, 2, 3, 4, 5) // 15

//剩余参数只能放在最后一个参数位置，并且只能有一个剩余参数