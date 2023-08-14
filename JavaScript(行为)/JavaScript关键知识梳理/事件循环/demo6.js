setTimeout(() => {
    console.log(1);
}, 0);

const first = () => new Promise((resolve, reject) => {
    console.log(2);
    let p = new Promise((resolve, reject) => {
        console.log(3);
        setTimeout(() => {
            console.log(4);
            resolve(5)
        }, 0)
    })
    resolve(6)
    p.then(res => {
        console.log((res));
    })
})

first().then(res => {
    console.log(res);
})

console.log(7);



