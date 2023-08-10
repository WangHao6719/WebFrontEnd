// 分离关注点
// 1. 一个函数只做一件事
// 2. 一个函数的代码行数尽量少
// 3. 一个函数的参数尽量少
// 4. 一个函数应该有一个明确的返回值
// 5. 一个函数应该有一个明确的异常处理
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    }
}
//不改变原有的代码的情况下实现方法执行开始和结束时打印日志

//Es6之前写法
// for (let key in calculator) {
//     const fn = calculator[key];
//     if (typeof fn !== 'function') continue;
//     calculator[key] = function () {
//         console.log('starting');
//         const result = fn.apply(undefined, arguments);
//         console.log('ending');
//         return result;
//     }
// }

//Es6写法
for (let key in calculator) {
    const fn = calculator[key];
    if (typeof fn !== 'function') continue;
    calculator[key] = function (...args) {
        console.log('starting ' + key + ' 方法');
        const result = fn(...args);
        console.log('ending ' + key + ' 方法');
        return result;
    }
}

// calculator.add(1, 2); 
