// for(i=1; i<=5; i++){
//     for(j=1; j<=7; j++){
//         if(j>=5-i && j<= 3+i){
//             process.stdout.write(" * ");
//         }else{
//             process.stdout.write("   ")
//         }
//     }
//     console.log(" ");
// }





// for( i=1; i<=5; i++){
//     for( j=1; j<=9; j++){
//           if(j<=5-i || j>=5+i){
//             process.stdout.write("  ");
//           }else{
//             process.stdout.write("* ");
//           }
//     }
//     console.log();
// }






// for(i=1; i<=5; i++){
//     for(j=1;j<=5; j++){
//         if(j<=i){
//             process.stdout.write(" * ");
//         }else{
//             process.stdout.write("   ")
//         }
//     }
//     console.log("");
// }



// for(i=1; i<=9; i++){
//     k = i<5? i:10-i
//     for(j=1; j<=9; j++){
//       if(j>= 6-k && j<= 4+k){
//         process.stdout.write("* ");
//       } else{
//         process.stdout.write("  ");

//       }
//     }
//     console.log(" ");
// }


// for(i=1; i<=9; i++){
//     k= i<=5? i:10-i;
//     for(j=1; j<=9; j++){
//         if(j>=6-k && j<= 4+k){
//             process.stdout.write("* ");
//         }else{
//             process.stdout.write("  ");
//         }
//     }
//     console.log("");
// }



// for(i=1; i<=9; i++){
//     k= i<=5? i:10-i;
//     for(j=1; j<=5; j++){
//         if(j<=k){
//             process.stdout.write("* ");
//         }else{
//             process.stdout.write("  ");
//         }
//     }
//     console.log("");
// }




// for(i=1;i<=5;i++){
//     for(j=1; j<=5;j++){
//         if(j==1 || i==1 || j==5 || i==5){
//             process.stdout.write("*");
//         }else{
//             process.stdout.write(" ");
//         }
//     }
//     console.log("");
// }


// for(i=1; i<=9; i++){
//     k= i<=5? i:10-i;
//     for(j=1; j<=10; j++){
//         if(j<=k || j>=11-k){
//             process.stdout.write("*");
//         }else{
//             process.stdout.write(" ");
//         }
//     }
//     console.log(" ");
// }




// function reversArray (arry){
//     let result =[];
//     for(let i =arry.length-1 ; i >=0; i--){
//         result.push(arry[i]);
//     }
//     return result;
// }
// console.log(reversArray([1,2,3,4,5]));



// let array1 = [1,2,3,4,5,6,];

// array1.reverse();

// console.log(array1);


// let numbers = [1, 2, 3, 4, 5];

// function reverseArray(arr) {
//     let reversed = [];

//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed[reversed.length] = arr[i];
//     }

//     return reversed;
// }

// console.log(reverseArray(numbers));




// let arr=[6]=77


// let nums = [1,2,3,4,5,6];

// function reversarray (array){
//     console.log(array);
//     let revers = [];

//     for(let i = array.length-1; i >=0 ;i--){
//         revers[revers.length] = array[i];
//     }
//     return revers;
// }
//  console.log(reversarray(nums));






// let a = [2, 6, 4];
// let b = [5, 1, 3];

// function margeArray(array1,array2){
//     let merge = [];

//     for(let i=0 ; i< array1.length; i++ ){
//         merge[merge.length]= array1[i]
//     }

//      for(let i=0 ; i< array2.length; i++ ){
//         merge[merge.length]= array2[i]
//     }
//     return merge ;
// }

// function sortArray(arr) {

//     for (let i = 0; i < arr.length - 1; i++) {

//         for (let j = 0; j < arr.length - 1; j++) {

//             if (arr[j] > arr[j + 1]) {

//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;

//             }
//         }
//     }

//     return arr;
// }



// console.log(sortArray(margeArray(a,b)));







// let a = [70, 50, 30, 10, 80];
// let b = [60, 40, 90, 20, 100];

// function mergeArray ( array1, array2){
//     let merge= [];

//     for(let i = 0; i< array1.length; i++){
//         merge[merge.length]= array1[i];
//     }
//     for(let i = 0; i< array2.length; i++){
//         merge[merge.length]= array2[i];
//     }
//     return merge;
// }
// function sortArray (array){

//     for(let i =0; i< array.length; i++){

//         for(let j=0; j< array.length; j++){

//             if( array[j] > array[j+1]){

//                 let bag = array[j];
//                 array[j]= array[j+1];
//                 array[j+1]= bag ; 
//             }
//         }
//     }
//     return array ;
// }
 
// console.log(sortArray(mergeArray(a,b)));








// let nums1 = [1,2,3,4,5];
// let nums2 = [6,7,8,9,10];

// function mergeArray (array1,array2){
//     let marge=[];

//     for(let i=0; i < array1.length; i++){
//         marge[marge.length]=array1[i];
//     }
//      for(let i=0; i < array2.length; i++){
//         marge[marge.length]=array2[i];
//     }
//     return marge ;
// }
// console.log(mergeArray(nums1,nums2));




// let arr = [1, 2, 3, 2, 4, 5, 3, 5, 6];

// function printUnique(arr) {
//     for (let i = 0; i < arr.length; i++) {

//         let count = 0;

//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//             }
//         }

//         if (count === 1) {
//             console.log(arr[i]);
//         }
//     }
// }

// printUnique(arr);



// let nums = [ 1,2,3,4,2,6,5,1,6];

// function printUnique(array){ 

//     for(let i=0; i< array.length; i++){

//         let count = 0 ; 

//         for(let j=0; j<array.length; j++){

//             if(array[i]===array[j]){
//                 count++ ;
//             }
//         }
//         if(count===1){
//             console.log(array[i]);
//         }
//     }
// }

// printUnique(nums);




// let array=[1,2,3,4,1,5,3,4,6];

// function printUnique(arr){

//     for(let i=0; i< arr.length; i++){

//         let count=0

//         for(let j=0 ; j< arr.length;j++){
//             if(arr[i]===arr[j]){
//                 count++ ;
//             }
//         }
//         if(count===1){
//             console.log(arr[i]);
//         }
//     }
// }
// printUnique(array);



// let nums = [1, 2, 3, 1, 3,3,5,2,6,1,7, 4, 5, 6, 5,1];
// function dublicate (arr){
//     let a=[];
//     for(let i =0; i < arr.length; i++){
//         let count = 0;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 count++;
                
//             }
//         }
//         if(count >=1){
//                        let notprinted = true;
//             for(k=0;k<i;k++){
//                 if(arr[i]===arr[k]){
//                     notprinted = false;
//                     break;


//                 }            }
//                 if(notprinted){
//                     a[a.length]=arr[i];
//                 }

//         }

//       }
//       console.log(a);
//     }


// dublicate(nums);



//  nums = [1, 2,1,4, 3, 4, 5,5, 6,];

// function printDublicate(array) {

//     for (i = 0; i < array.length; i++) {

//         let count = 0;

//         for (j = i; j < array.length; j++) {

//             if (array[i] === array[j]) {
//                  count++ ;
//             }
//         }
//         if (count > 1) {


//             let alredyprinted = false;

//             for (k = 0; k < i; k++) {

//                 if (array[i] === array[k]) {
//                     alredyprinted = 
//                     ;
//                     break;
//                 }
//             }

//             if (!alredyprinted) {
//                 console.log(array[i]);
//             }
//         }
//     }
// }

// printDublicate(nums);    


// let items=[1,2,3,2,4,5,6,7,5,8,];

// function changeDublicate(arr){

//     for(let i=0;i<arr.length;i++){
//         let count=0;

//         for(let j=0; j<arr.length;j++){

//             if(arr[i]===arr[j]){
//                 count++;
//             }
//         }
//         if(count >1){
//             let alredyPrinted=false;

//             for(let k=0;k<i;K++){

//                 if(arr[i]===arr[k]){
//                     alredyPrinted=true;
//                     break;
//                 }
//             }

//         }
//     }
// }

// let ab = [1, 2, 5, 4, 7, 9,13, 17, 19, 23,];

// function items (arr){
//     prime=[]

//     for(let i=0; i<arr.length;i++){
        
//         if(arr[i]==2){
//             prime[prime.length]=arr[i]
//             continue;
//         }
//         let isprime = true;
//         for(let j=2;j<arr[i];j++){
            
//             if(arr[i]%j==0){
//                 isprime = false;
//             } 
            
//         }
//          if(isprime){
//             prime[prime.length]=arr[i]
//         }
       
//     }
//      console.log(prime);
//     }
   

//     items(ab);

































































// function items(arr) {
//     let prime = [];

//     for (let i = 0; i < arr.length; i++) {

//         let num = arr[i];

//         // 1 is not prime
//         if (num <= 1) {
//             continue;
//         }

//         let isPrime = true;

//         for (let j = 2; j < num; j++) {

//             if (num % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) {
//             prime[prime.length] = num;
//         }
//     }
//     console.log(prime);
// }

// let  nums = [0,0,1,1,1,2,2,3,3,4]

// let nb = function(nums) {
//     let count = 0;
//     for(i=0; i<nums.length; i++){

//         for(j=1; j<nums.length;j++){

//             if(nums[i]===nums[j]){
//                 count++ ;
//             };

           
//         }
//     }
//     console.log(count);
// };
// nb();




// let s = "Hello World"

// var lengthOfLastWord = function(s) {
//     let string = s.split(",");


//     console.log(s);
//     console.log(string);

// }

// lengthOfLastWord()

// let s = "hello world";

// let lengthOfLastWord = function(s) {
//     let array = s.split(" ")

//     let word = array[array.length - 1];



//     console.log(word.length);
    
// };



// lengthOfLastWord(s);

// console.log(result);











































