setTimeout(() => {
    console.log('1')
}, 30)

console.log(2)

setTimeout(() => {
    console.log(3)
}, 20)

console.log(4)

function delay(duration) {
    var start = Date.now();
    while (Date.now() - start < duration) { }
}
delay(1000)

console.log(5)

setTimeout(() => {
    console.log(6)
}, 18)

console.log(7)

setTimeout(() => {
    console.log(8)
}, 25)

console.log(9)
// 结果：2 4 5 7 9 3 1 6 8
