

// function sumNums(n){
//     let sum=[];
//     let y=0;
//     let x=0;
    

//     for(let i=1;i<=n;i++){
//         sum[x]=i;
//         x++;
//         y+=i
    
//   } 
//   return y/n;
// }
// console.log(sumNums(20));




// let  array = [5,2,7,4,5];

// function deletTheElamant (n){
//         let temb=0
        

//       for(let i=0; i<=array.length;i++){

//         if(n==i+1){
//             temb = array[i];
//             array[i] == array.length-1;
//             array.length-1 == array[i];

//         }
//       }

//     console.log(array) ;
// }
// deletTheElamant(3);




// let array = [5, 2, 7, 4, 5];

// function deletTheElamant(n) {
//     let temb = 0;

//     for (let i = 0; i < array.length; i++) {

//         if (n == i+1) {   
//             temb = array[i];

//             for (let j = i; j < array.length - 1; j++) {
//                 array[j] = array[j + 1];
//             }
//             array[array.length - 1] = temb;

//             break;
//         }
//     }
//     console.log("Before removing last:", array);

//     array.length = array.length - 1;

//     console.log("After removing last:", array);
// }

// deletTheElamant(3);





// let array =[10,20,30,40,50,60];

// function deletenums( x ){
//     let tump =0;

//     for(let i=0; i<array.length;i++)

//         if(x==i+1){
//             temp = array[i];

//             for(let j=i; j<array.length -1;j++){
//                 if(array[j]=array[j+1]){

//                 }
//                 array[array.length-1]=temp
//                 break;
//             }
//         }
//         console.log("without remove elament",array);
//         array.length=array.length - 1 ;
//         console.log("remove the elament",array);

// }
// deletenums(5);



// let arr=[1,2,3,4,5];

// function sumOfarray (array){
//     let sum=0
//     for(let i=0; i<array.length;i++){
//         sum = sum+array[i];

//     }
//     return sum;
// }
// console.log(sumOfarray(arr));






// function makedublicats (arr,n){
//     let arr1=[];

//     for(let i=0;i<arr.length;i++){
//         if(i < n){
//             arr1[arr1.length]=arr[i];
            
//         }
//     }
//     console.log("groups off array",arr1);
// }
// arr=[1,2,3,4,5,6,7,8,9,10]
// makedublicats(arr,4);
// console.log(arr);



// let str = "JavaScript";

// console.log(str.slice(0, 4)); // Java
// console.log(str.slice(4, 10));// Script


// let str = "sahadali"

// console.log(str.slice(5));
// console.log(str.slice(0, 5));



// for(let i=0; i<=10; i++){
//     for(let j=0; j<=10; j++){
//         if(j<=i){
//             process.stdout.write("* ");
//         }else{
//             process.stdout.write("  ");

//         }
//     }
//     console.log("");
// }

// for(i=0;i<=5; i++){
//     for(j=0;j<=9;j++){
//         if(j>=6-i && j<=4+i){
//             process.stdout.write("* ");
//         }else{
//             process.stdout.write("  ");

//         }
//     }
//     console.log("");
// }




// for(i=1;i<=5;i++){
//     for(j=1;j<=5;j++){
//         if(i==1 || j==1 || i==5 || j==5 ){
//             process.stdout.write("* ");
//         }else{
//             process.stdout.write("  ");
//         }
//     }
//     console.log("");
// }



// for(i=0;i<=5;i++){
//     for(j=0;j<=5;j++){
//         if(j<=4-i){
//             process.stdout.write("* ");
//         }else{
//             process.stdout.write(" ");
//         }
            
//     }
//     console.log("");
// }


// let A = ["apple","orang","grape"];
// let b=[];

// for(let i=A.length-1;i>=0;i--){
//     b[b.length]=A[i];

// }
// console.log(b);



// let num=[8,3,6,9,2,1,4,7,5];

// function sortArray (nums){

//     for(i=0; i < nums.length ; i++){

//         for(j=0; j < nums.length-1; j++){
            
//             if( nums[j] > nums[j+1]){
                
//                 let temp = nums[i];
//                 nums[i] = nums[i+1];
//                 nums[i+1] = temp;
//             }
//         }
//     }
//    return nums ;
// }
// console.log(sortArray(num));




























