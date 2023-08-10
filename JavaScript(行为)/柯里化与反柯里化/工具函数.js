// 柯里化工具函数
function curry(fn, ...args) {
    if (args.length >= fn.length) {
        return fn(...args);
    }
    return function (...args2) {
        return curry(fn, ...args, ...args2);
    }
}
//测试柯里化工具函数
// function add(a, b, c) {
//     return a + b + c;
// }
// console.log(curry(add, 1)(2, 3));  // 6
// console.log(curry(add, 1, 2)(3));  // 6
// console.log(curry(add)(1)(2, 3));  // 6


//反柯里化工具函数
const uncurry = function (fn) {
    return function (...args) {
        return fn(...args);
    };
};
//测试反柯里化工具函数
// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }
// console.log(uncurry(add)(1)(2)(3)); // 6