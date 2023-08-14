async function fun() {
    console.log(1);
}
var f = fun()
console.log(f);
// 1 
// Promise {<fulfilled>: undefined}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined

async function fun() {
    console.log(1);
    return 666
}
var f = fun()
console.log(f);

  // 1
  // Promise {<fulfilled>: 666}
  // [[Prototype]]: Promise
  // [[PromiseState]]: "fulfilled"
  // [[PromiseResult]]: 666


  async function fun(){
    console.log(a);
  }
  var f = fun()
  console.log(f);
  
  // Promise {<rejected>: ReferenceError: a is not defined
  //   at fun (http://127.0.0.1:5500/promise.js:2:15)
  //   at http://1…}[[Prototype]]: Promise[[PromiseState]]: "rejected"[[PromiseResult]]: ReferenceError: a is not defined
  //   at fun (http://127.0.0.1:5500/promise.js:2:15)
  //   at http://127.0.0.1:5500/promise.js:4:9
  // promise.js:2 
        
  //   Uncaught (in promise) ReferenceError: a is not defined
  //   at fun (promise.js:2:15)
  //   at promise.js:4:9