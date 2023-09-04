//手写Promise
//Promise A+规范：https://promisesaplus.com/ 只要符合这个规范的都是Promise
//规范中有三个点：1.状态只能从等待态转换为成功态或者失败态，且状态一旦改变则不能再次改变
//2.必须有一个then方法，then方法接收两个参数，分别是成功的回调和失败的回调
//3.如果new Promise时，executor函数报错，则直接执行reject

//定义三种状态，分别为等待态，成功态，失败态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class MyPromise {
    // # 表示私有属性,es6中的新特性
    #status = PENDING
    #result = undefined
    #handlers = []
    constructor(executor) {
        const resolve = (data) => {
            this.#changeStatus(FULFILLED, data)
        }
        const reject = (reason) => {
            this.#changeStatus(REJECTED, reason)
        }
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    //辅助函数，用于改变状态
    #changeStatus = (status, result) => {
        // 只能从等待态转换为成功态或者失败态，且状态一旦改变则不能再次改变
        if (this.#status !== PENDING) return
        this.#status = status
        this.#result = result
        this.#run()
    }
    //辅助函数，用于判断是否是Promise
    #isPromiseLike = (result) => {
        return (typeof result === 'object' || typeof result === 'function') && typeof result.then === 'function'
    }
    //辅助函数，用于执行微任务
    #runMicroTask = (fn) => {
        if (typeof process === 'object' && typeof process.nextTick === 'function') {
            // node环境
            process.nextTick(fn)
        } else if (typeof MutationObserver === 'function') {
            //浏览器环境
            const observer = new MutationObserver(fn)
            const textNode = document.createTextNode('1')
            observer.observe(textNode, {
                characterData: true
            })
            textNode.data = '2'
        } else {
            //都不支持，用setTimeout代替
            setTimeout(fn, 0)
        }
    }
    //辅助函数，用于执行回调
    #runOne = (callback, resolve, reject) => {
        this.#runMicroTask(() => {
            if (typeof callback !== 'function') {
                if (this.#status === FULFILLED) {
                    resolve(this.#result)
                } else {
                    reject(this.#result)
                }
                return
            }
            try {
                const res = callback(this.#result)
                if (this.#isPromiseLike(res)) {
                    res.then(resolve, reject)
                    return
                } else {
                    resolve(res)
                }
            } catch (err) {
                reject(err)
            }
        })
    }
    //辅助函数，用于执行回调队列
    #run = () => {
        if (this.#status === PENDING) return
        while (this.#handlers.length) {
            const { onFulfilled, onRejected, resolve, reject } = this.#handlers.shift()
            if (this.#status === FULFILLED) {
                this.#runOne(onFulfilled, resolve, reject)
            } else {
                this.#runOne(onRejected, resolve, reject)
            }
        }
    }
    // A+规范中的then方法
    then = (onFulfilled, onRejected) => {
        return new MyPromise((resolve, reject) => {
            this.#handlers.push({
                onFulfilled,
                onRejected,
                resolve,
                reject
            })
            this.#run()
        });
    }
    //失败回调
    catch = (onRejected) => {
        return this.then(null, onRejected)
    }
    //finally方法
    finally = (onFinally) => {
        return this.then(data => {
            onFinally()
            return data
        }, err => {
            onFinally()
            throw err
        })
    }
    //resolve方法
    static resolve = (data) => {
        if (data instanceof MyPromise) return data
        let _resolve, _reject;
        const p = new MyPromise((resolve, reject) => {
            _resolve = resolve
            _reject = reject
        })
        if (p.#isPromiseLike(data)) {
            data.then(_resolve, _reject)
        } else {
            _resolve(data)
        }
        return p
    }
    //reject方法
    static reject = (reason) => {
        return new MyPromise((resolve, reject) => {
            reject(reason)
        })
    }
    //all方法
    static all = (promises) => {
        return new MyPromise((resolve, reject) => {
            const result = []
            let count = 0
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(data => {
                    result[i] = data
                    count++
                    if (count === promises.length) {
                        resolve(result)
                    }
                }, reject)
            }
        })
    }
}

//基础测试
// const p = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(123)
//     }, 1000)
// })
// p.then((date) => {
//     console.log('ok', date)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(456)
//         }, 1000)
//     })
// }).then((date) => {
//     console.log('ok2', date)
// })

//测试 async await
// const test = async () => {
//     await delay(1000)
//     console.log("ok1")
// }
// const delay = (time) => {
//     return new MyPromise((resolve) => {
//         setTimeout(resolve, time)
//     })
// }
// test()

//测试事件循环
// setTimeout(() => {
//     console.log(1)
// }, 0)
// new MyPromise((resolve) => {
//     resolve(2)
// }).then((data) => {
//     console.log(data)
// })
// console.log(3)

//测试catch
// const p = new MyPromise((resolve, reject) => {
//     throw 123
// })
// p.then((date) => {
//     console.log('ok', date)
// }).catch((err) => {
//     console.log('err', err)
// })

//测试finally
// const p = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(123)
//     }, 1000)
// })
// p.then((date) => {
//     console.log('ok', date)
// }).finally(() => {
//     console.log('finally')
// })

//测试resolve
// const p = new MyPromise((resolve, reject) => {
//     resolve(123)
// })
// MyPromise.resolve(p).then((date) => {
//     console.log('ok', date)
// }) //ok 123

// MyPromise.resolve(123321).then((date) => {
//     console.log('ok', date)
// }) //ok 123321

//测试reject
// MyPromise.reject(123321).then((date) => {
//     console.log('ok', date)
// }, (err) => {
//     console.log('err', err)
// }) //err 123321

//测试all
// const p1 = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(123)
//     }, 1000)
// })
// const p2 = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(456)
//     }, 2000)
// })
// MyPromise.all([p1, p2]).then((date) => {
//     console.log('ok', date)
// }) //ok [123,456]

