// arguments is array like object 
// can not push a arguments 
function sum(a, b, c){
    // console.log(typeof arguments);
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(23, 44, 55, 34, 23, 43);
// console.log(total);

console.log(sum.length);