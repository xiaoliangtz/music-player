// const { debug } = require('webpack');

// console.log('index');
var arr1 = [1, 2, 3, 4];
var result = 0;
// debugger;
console.log('ssss');
// for (const item of arr1) {
//     result += item;
// }
for (var i = 0; i < arr1.length; i++) {
    result += arr1[i];
}
console.log(result);
