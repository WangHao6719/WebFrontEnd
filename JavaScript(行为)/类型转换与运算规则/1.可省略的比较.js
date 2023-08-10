var isFind = false; //isfind是一个boolean类型的变量
// 分别根据isFind的值为true和false，输出不同的结果
if (isFind == true) {
    console.log("找到了！");
} else {
    console.log("没找到！");
}
//可以简写为
// if (isFind) {
//     console.log("找到了！");
// } else {
//     console.log("没找到！");
// }

var user = null; //user是一个null类型的变量
// 分别根据user的值为null和非null，输出不同的结果
if (user === null) {
    console.log("用户不存在！");
} else {
    console.log("用户：" + user);
}
//可以简写为
// if (!user) {
//     console.log("用户不存在！");
// } else {
//     console.log("用户：" + user);
// }
