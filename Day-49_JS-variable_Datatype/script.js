console.log("Today, i am discuss about Variables and Datatypes of JS")

var a = 34;         // var is a globle 
var b = "Anish";
var c = true;
var d = null;

var f = 65;

console.log(a + f);
console.log(a , b, c, d);
console.log(typeof a , typeof b, typeof c, typeof d);

let x = 45 ;  // let is  a block

{
    var a = 95;
    console.log(a)

    let x = 87
    console.log(x)
}


console.log(a)
console.log(x)



let p = "Anish bhai";
let q = 23;
let r = 233.45;
let s = undefined;
const t = true;
let u = null;


console.log(p ,q, r, s, t, u);
console.log(typeof p ,typeof q, typeof r, typeof s, typeof t, typeof u);


let obj = {
    name : "Anish",    // name ko "" ke andr v likh skte hai agr space use krna ho to "" me hi likhenge.
    "job salary" : 230000,
    "is_handsome" : true
}


console.log(obj);

obj.salary = "1000crores"
console.log(obj)

obj.salary = "50000cr"

console.log(obj)