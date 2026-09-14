// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9,163, 167, ];
// let x = 0
// let prime = []

// function primeNumbers(array) {

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] <= 1) {
//             continue;
//         }
//         let flag = true

//         for (let j = 2; j < array[i]; j++) {

//             if (array[i] % j == 0) {
//                 flag = false
//                 break;

//             }
//         }

//         if (flag) {
//             prime[x]=array[i]
//             x ++;
//         }
//     }
// }

// primeNumbers(nums)
// console.log("prime", prime);

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9,163, 167, ];
// let prime = [] ;
// let x = 0 ;
// function primeNumbers(arr){
    
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<=1){
//             continue;
//         }
//         let flag = true ;

//         for(let j=2;j<arr[i];j++){

//             if(arr[i] % 2==0 ){
//                 flag=false;
//                 break;
//             }

//         }
//         if(flag){
//             prime[x]=arr[i];
//             x++;
//         }
//     }
// }
// primeNumbers(nums);
// console.log(prime);


// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9,163, 167, ];
// let prime=[];
// let x=0 ;
// function primeNumbers (arr){

//     for(i=0;i<arr.length;i++){
//         if(arr[i]<=1){
//             continue;
//         }
//         flag = true;

//         for(j=2;j<arr[i];j++){
//             if(arr[i] % j ==0){
//                 flag=false ;
//                 break;
//             }
//         }
//         if(flag){
//             prime[x]=arr[i];
//             x++ ;
//         }
//     }
// }
// primeNumbers(nums);
// console.log("prime",prime);




//**************************************************************************//
//************************NotPrimeNums************************************//



let nums=[1,2,3,4,5,6,7,8,9,10];
let prim=[];
let x= 0;

function deleteprimes (arr){

    for(i=0;i<arr.length;i++){
        if(arr[i]<=1){
            continue;
        }
        let flag =true;

        for(j=2;j<arr[i];j++){
            if(arr[i] % j ==0){
                flag=false;
                break;
            }
        }

        if(!flag){
            prim[x]=arr[i];
            x++;
        }
    }
    
}

deleteprimes(nums);
console.log(prim);

























