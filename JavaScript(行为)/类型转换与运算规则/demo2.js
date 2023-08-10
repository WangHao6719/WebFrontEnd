console.log(([][[]] + [])[+!![]] + ([] + {})[!+[] + !![]])
// [] => ""  =>  0
// [][[]] + []  =>  [][0] + []  =>  undefined + []  =>  "undefined"
// +!![]  =>  +true  =>  1
// ([] + {})  =>  "" + {}  =>  "[object Object]"
// !+[]  =>  !0  =>  true
// !![]  =>  !!''  =>  !!0  =>  false
// !+[] + !![]  =>  true + false  =>  1
// "undefined"[1] + "[object Object]"[1]  =>  "n" + "b"  =>  "nb"