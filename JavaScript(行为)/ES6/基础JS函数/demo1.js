// 函数防抖
function debounce(fn, delay = 3000, ...args) {
    let timer = null;
    return (...args2) => {
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn(...args, ...args2)
        }, delay);
    }
}

var newFn = debounce(function (a, b, c, d) {
    console.log(a, b, c, d);
}, 3000, 1, 2);
newFn(3, 4);