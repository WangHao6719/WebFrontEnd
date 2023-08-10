const nums = [45, 4, 9, 16, 25];
//如何利用Math.max()方法求出数组中的最大值
// console.log(Math.max(nums)) // NaN
// console.log(Math.max(...nums)) // 45

// 1.针对可迭代对象展开,可迭代对象包括数组，字符串，Set，Map，arguments等
const newNums = [...nums]
console.log(newNums) // [45, 4, 9, 16, 25]
// 2.针对普通对象展开，只会展开自身的可枚举属性
const obj = {
    name: '张三',
    age: 18
}
const newObj = { ...obj }
console.log(newObj) // { name: '张三', age: 18 }

//注, 展开运算符和剩余参数的区别
//1.展开运算符可以展开多个值，剩余参数只能有一个
//2.展开运算符可以放在任意位置，剩余参数只能放在最后一个参数位置
