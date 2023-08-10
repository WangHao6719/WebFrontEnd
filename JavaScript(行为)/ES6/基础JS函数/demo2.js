//Es6之前数组去重
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
// function unique(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (result.indexOf(arr[i]) === -1) {
//             result.push(arr[i])
//         }
//     }
//     return result;
// }
// console.log(unique(arr)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Es6数组去重
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
// function unique(arr) {
//     return [...new Set(arr)]
// }
// console.log(unique(arr)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]