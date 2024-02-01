Q1. Is it possible to run JavaScript outside the browser?

Ans : Yes, it is possible to run JavaScript outside the browser. There are several ways to run JavaScript outside the browser. You can use Node.js, Deno, Bun, or any other JavaScript runtime environment.
------------------------------------------------
Q2. What is Prototype Chain in JavaScript?

Ans : The prototype chain in JavaScript refers to the chain of objects linked by their prototypes. When a property or method is accessed on an object, JavaScript first checks the object itself. If it doesn't find it there, it looks up the property or method in the object's prototype. This process continues, moving up the chain from one prototype to the next, until the property or method is found or the end of the chain is reached (typically the prototype of the base object, which is null). The prototype chain is fundamental to JavaScript's prototypal inheritance model, allowing objects to inherit properties and methods from other objects.
------------------------------------------------
Q3. Explain `alert()`, `prompt()`, and `confirm()` methods in JavaScript?

Ans : The alert() method displays an alert box with a specified message and an OK button.

The prompt() method displays a dialog box that prompts the visitor for input. A prompt box is often used if you want the user to input a value before entering a page. The prompt() method returns the input value if the user clicks OK. If the user clicks Cancel, the method returns null.

The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button. This is often used to confirm or verify something from the user.
------------------------------------------------
Q4. How to run a piece of code after a specific time interval?

Ans : You can run some codes on interval using setInterval function in JavaScript. It accepts a function and a time interval in milliseconds. It returns a unique id which you can use to clear the interval using clearInterval function.
/*
const intervalId = setInterval(() => {
  console.log('Hello World');
}, 1000);

// Output:
// Hello World
// Hello World 
*/
In the above code, the setInterval function runs the callback function every 1000 milliseconds (1 second) and prints Hello World to the console. It returns a unique id which you can use to clear the interval using clearInterval function.

clearInterval(intervalId);
------------------------------------------------
Q5. How to make an Object immutable in JavaScript?

Ans: To make an object immutable, you can use Object.freeze() method. It prevents the modification of existing property values and prevents the addition of new properties.
------------------------------------------------
Q6. Map, FilterC reduce

1. map => 
  const arr1 = [1,2,5,6];
 // map method get value and index from the array 
    arr1.map((value,index)=> {
        console.log(value,index);
    })

2. Filter =>
     const arr2 = [1,2,5,6];
 // map method get value and index from the array 
    const a2 = arr2.filter((elemts)=> {
         return elemts > 1
    })  

3. reduce =>
   const arr3 = [12,2,41,32,25];

    const ans = arr3.reduce((h1,h2) => {
        return h1 + h2;
    } )
output will the sum of the array 3 
------------------------------------------------

------------------------------------------------

------------------------------------------------