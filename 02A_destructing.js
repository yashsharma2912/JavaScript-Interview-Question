// destructing = extract values from
//               arrays and objects, 
//               then assign them to 
//               variables in a convinient 
//               way
//         [] = array destructing
//         {} = object destructing

const a = 12; 
const b = 32; 

// object swapping in an array
[a,b] = [b,a]
console.log(a);
console.log(b);