// var a =? 使得 (a == 1 && a == 2 && a == 3) 的值为 true
// console.log(a == 1 && a == 2 && a == 3)

// 1.使用对象属性的 getter 方法来动态返回值：
// var a = {
//     value: 1,
//     get [Symbol.toPrimitive]() {
//         return () => this.value++;
//     }
// };
// console.log(a == 1 && a == 2 && a == 3)
//2.使用自增运算符来不断改变变量的值：
// var a = {
//     i: 0,
//     valueOf() {
//         return ++this.i;
//     }
// }
// console.log(a == 1 && a == 2 && a == 3)
// 3.通过数组shift() 方法来实现：
// var a = [1, 2, 3];
// a.toString = a.shift;
// console.log(a == 1 && a == 2 && a == 3)
// console.log(a == 1 && a == 2 && a == 3)
// 4.利用 ES6 中的 Proxy 对象来实现：
// var a = new Proxy({}, {
//     i: 1,
//     get: function () {
//         return () => this.i++;
//     }
// });
// console.log(a == 1 && a == 2 && a == 3)
// 5.利用 ES6 中的 Symbol.toPrimitive 方法来实现：
// var a = {
//     i: 1,
//     [Symbol.toPrimitive]: function () {
//         return this.i++;
//     }
// }
// console.log(a == 1 && a == 2 && a == 3)
// 6.利用 ES6 中的 Symbol.iterator 方法来实现：
// var a = {
//     i: 1,
//     [Symbol.iterator]: function () {
//         return {
//             next: () => {
//                 return {
//                     value: this.i++,
//                     done: false
//                 }
//             }
//         }
//     }
// }
// console.log(a == 1 && a == 2 && a == 3)
// 7.利用 ES6 中的 generator 方法来实现：
// var a = {
//     i: 1,
//     [Symbol.iterator]: function* () {
//         yield this.i++;
//         yield this.i++;
//         yield this.i++;
//     }
// }
// console.log(a == 1 && a == 2 && a == 3)
