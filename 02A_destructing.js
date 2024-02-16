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

const colors = [ "red", "green","pink","white"];
[colors[0],colors[3]] =[colors[3],colors[0]]

// use of rest operator it will assign remaining colors to remains element
const[first, second, ...remains] = colors;

// EXTRACT VALUES FROM AN OBJECT

function displayPerson({name,age,city}){
 console.log(`name: ${name}`)
 console.log(`age: ${age}`)
 console.log(`city: ${city}`)
}

const person1 = {
    name: " john",
    age: 21,
    city: "oosmanabad",
}
const person2 = {
    name: "smith",
    age: 32,
    city: "sangali",
}

displayPerson(person1);