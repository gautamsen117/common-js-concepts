/* 
strongly typed Language
another language
int a = 5; 
string b = 'something else';
bool c = true;
object student = {name: 'nayan', id: 54}
int[] = [23, 32, 12, 54]
string[] frinends  = ['abul', 'babul'];
*/

// JavaScript is a dynamic type Language

// primitive type
const a = 5;
const b = 'Samsu kopai na ekhon ar';
const d = true;


// non-primitive 
const ages = [23, 45, 12];
const student = {id: 23, class: 7}
// console.log(typeof a, typeof b, typeof  d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y); 
y = 7;
console.log(x, y);

let p = {job: 'Web developer'}
let q = p;
q.job = 'front end developer';
console.log(p, q);