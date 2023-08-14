// function funSync() {
//     setTimeout(() => {
//         var timeback
//         // 逻辑代码执行
//         timeback = '异步执行结果'
//         return timeback
//     }, 2000);
// }
// var res = funSync()
// console.log(res);
// 上面的代码，想要接受异步处理的结果，我们只能使用回调函数；
function funSync(callBack) {
    setTimeout(() => {
        var timeback
        // 逻辑代码执行
        timeback = '异步执行结果'
        // return timeback
        callBack(timeback)
    }, 2000);
}
// 调用函数传入回调
funSync((res) => {
    console.log(res);
})