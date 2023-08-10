var user = {
    name: '小明',
    addr: {
        city: '哈尔滨',
        province: '黑龙江'
    }
}
//获取用户居住城市名
//每一个属性都有可能为null或undefined
//user本身也有可能为null或undefined
if (user) {
    if (user.addr) {
        if (user.addr.city) {
            console.log(user.addr.city)
        }
    }
}
//可以简写为
// console.log(user && user.addr && user.addr.city)