// 1. Find the length of the string "JavaScript"

let java = "JavaScript";

let length= java.length;

console.log(length);  // 10


// 2. Convert "hello world" to uppercase.


let hello = "hello world";

let capital = hello.toUpperCase();

console.log(capital); //HELLO WORLD


// 3. Convert "WELCOME" to lowercase.

let hay = "WELCOME";

let lower = hay.toLowerCase();

console.log(lower); // welcome


// 4. Check if the string "JavaScript is fun" contains the word "fun"

let Check = "JavaScript is fun";

let Checkitem= Check.includes("fun");

console.log(Checkitem); // true


// 5. Replace "World" with "JavaScript" in the string "Hello World".

let world =  "Hello World";

let Replace = world.replace("world", "JavaScript");

console.log(Replace);// Hello World





////////////////////////////////    Array Problems     /////////////////////////////////



// 6. Given the array [10, 20, 30, 40, 50], find the sum of all elements.


let arr = [10, 20, 30, 40, 50];

let sum = arr.reduce((acc,crr)=>{
    return acc + crr ;
},0);

console.log(sum); // 150


// 7. Given the array [5, 3, 8, 1, 9], find the largest number.

let array = [5, 3, 8, 1, 9];

let highvalue = array.sort((a,b) => {
    return b-a ;
}) ;
console.log(array[0]); // 9 

// 8. Reverse the array [1, 2, 3, 4, 5].

let arr1 = [1, 2, 3, 4, 5];

let Reverse = arr1.reverse();

console.log(Reverse); // [ 5, 4, 3, 2, 1 ]


// 9. Filter only even numbers from the array [1, 2, 3, 4, 5, 6].

let arr2 = [1, 2, 3, 4, 5, 6];

let even = arr2.filter((a)=>{
    return a %2===0 ;
});
console.log(even); //[ 2, 4, 6 ]


// 10. Double every element in the array [1, 2, 3, 4] using map().

let array1 = [1, 2, 3, 4];

let double = array1.map((a)=>{
    return a *2 ;
});

console.log(double); // [ 2, 4, 6, 8 ]
