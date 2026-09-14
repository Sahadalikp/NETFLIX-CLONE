//  1. Reverse an Array Without Using an Additional Array ( Array: [1, 3, 4, 2, 5] )

let arr = [1, 3, 4, 2, 5];

arr.reverse();

console.log(arr); // [ 5, 2, 4, 3, 1 ]



// 2. Merge Two Unsorted Arrays in Sorted Order 
// Array A: [2, 5, 7, 4, 1]
// Array B: [3, 6, 8, 9, 10]

let arrayA =[2, 5, 7, 4, 1];
let arrayB =[3, 6, 8, 9, 10];

let arrayC =[...arrayA,...arrayB].sort((a,b)=>  a-b );

console.log(arrayC); //  [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]



// 3. Merge Two Already Sorted Arrays
//Array A: [1, 2, 3, 4, 5]
//Array B: [6, 7, 8, 9, 10];

let arrA = [1, 2, 3, 4, 5];
let arrB = [6, 7, 8, 9, 10];

let arrC= [...arrA,...arrB];

console.log(arrC); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
  

// 4. Print All Unique Elements in an Array
// Array: [1, 2, 1, 4, 5, 4];

let array1 = [1, 2, 1, 4, 5, 4];

let unique = array1.filter((z) => {
    return array1.indexOf(z) === array1.lastIndexOf(z);
});

console.log(unique);//[ 2, 5 ]


//5. Print Duplicate Elements in an Array
// Array: [1, 2, 1, 4, 5, 4];

let array2 = [1, 2, 1, 4, 5, 4];

let dublicate = array2.filter((x)=>{
    return array2.indexOf(x) !== array2.lastIndexOf(x);
});
console.log(dublicate);// [ 1, 1, 4, 4 ]



// 6. Print All Prime Numbers in an Array
//let arr = [2, 9, 7, 5, 4, 10];


let arrAB = [2, 9, 7, 5, 4, 10];

let primes = arrAB.filter(num => {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
});

console.log(primes);// [ 2, 7, 5 ]



//7. Remove All Prime Numbers From an Array
//let arr = [2, 9, 7, 5, 4, 10];

let arrCD = [2, 9, 7, 5, 4, 10];

let Removeprimes = arrCD.filter(num => {
    if (num < 2) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return true;
        }
    }

    return false;
});

console.log(Removeprimes); // [ 9, 4, 10 ]


//8. Find the Average of N Numbers (N < 10)


let avarage = function(N){

let sum =0;

    for(let i=1 ; i<=N; i++){
        sum += i ; 
    };

    return sum / N
};
console.log(Math.floor(avarage(10))); // 5



// 9.Accept any positive value N, fill the array with 1 to N, and compute the average.



function average(N) {
    let ar1 = [];
    let sumd = 0;

  
    for (let i = 1; i <= N; i++) {
        ar1.push(i);
        sumd += i;
    }

    return sumd / ar1.length;
}

console.log( average(6));// 3.5



// 10. Remove the element at the specified position (1-indexed) from the array.


let ara1 = [10, 20, 30, 40, 50];


function deleteElement(arr, position) {
    arr.splice(position - 1, 1); 
    return arr;
}

console.log(deleteElement(ara1, 3));// [ 10, 20, 40, 50 ]



