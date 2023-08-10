var limit; //limit可能是null，undefined，大于0的数值
//如果limit为null或undefined，则将其设置为10
if (limit === null || limit === undefined) {
    limit = 10;
}
//可以简写为
// var limit = limit || 10;