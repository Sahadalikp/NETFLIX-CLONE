//.......................// Global Scope//.............................//

// let name = "sahad";

// function newname(){
//     console.log(name);
// }
// newname();

// console.log(name);




// function display (){
//     // function scope 
//     var color= "green"
//     if(true){

//         //block scope 
//         var colors= "red"
//     }
// }
// display();
// console.log(color);

//   function outer() {
//     let a = 10;

//     function inner() {
//         let b = 20;
//     }

//     console.log(b);
// }

// outer();


//.......lexical scope......//


// let message = "Hello";

// function parent() {
  

//     function child() {
//         console.log(message);
//     }

//     child();
// }

// parent();

// ..........Array Updater........// 

// let fruits =["apple","orang","mango"];

// fruits[2]="banana";

// console.log(fruits);


//...........map...........//

// let numbers = [1,2,3,4,5];

// let result = numbers.map(num => num *2);
// console.log(result);

// let numbers = [1,2,3];

// let result = numbers.map(num => num * 10 );
 
// console.log(numbers); 

// console.log(result);


// let name = ["ali","shaham","rinshad"];

// let upername = name.map(name => name.toUpperCase());
// console.log(upername);
// console.log(name); 


// let users = ['ali',"shaham","rinshad"];
 
// let welcome = users.map(user => "Welcome" + user);

// console.log(welcome);


// let fruits = ["Apple", "Orange", "Mango"];

// let result = fruits.map((fruit, index) => {
//     return index + " : " + fruit;
// });

// console.log(result);

// let users = [
//     {name : "sahad",Age:21},
//     {name : "shaham",age:32}
// ];
// let result = users.map(user =>{
//     return{
//         name: user.name,
//         status: "Active"

//     };
// });

// console.log(result);


// let prices = [100,200,300];

// let gstPrices = prices.map(price => price + 18);

// console.log(prices);
// console.log(gstPrices);

 
// const ages = [32,17,19,33,21];

// function checkAdult(age){
//     return age >=21;

// }
// const result = ages.filter(checkAdult);


// console.log(ages);
// console.log(result);


// let marck = [ 18, 30, 42, 22, 54, 80,];

// let result= marck.filter(mar=> mar > 20);


// console.log(`total marck = ${marck}`);
// console.log(`pass marck = ${result}`);


// let nums = [1,2,3,4,5,6,7,8,9,10];

// let result = nums.filter(num => num %2 === 0);
// let odd = nums.filter(num => num %2 !== 0);


// console.log (` even numbers ${result}`);
// console.log (` odd numbers ${odd}`);

// let numbers =[10,20,30,40,50,];

// let total = numbers.reduce((acc , curr) => {
//     return acc+curr;
// },0);

// console.log(total);

// let nums = [ 2,3,4];

// let multiple = nums.reduce((acc,curr)=> {
//     return acc * curr;
// },1);

// console.log(multiple);

//  let marcks = [ 30,54,67,25,100,89,90,];

//  let highvalue = marcks.reduce((acc,curr) => {
//     return curr < acc ? curr : acc ;
//  });
//  let lowstvalue = marcks.reduce((acc,curr) => {

//     return curr > acc ? curr : acc ;
//  });


// console.log(` High marck = ${highvalue}`);
// console.log(` lowst  marck = ${lowstvalue}`);

// let fruits = [ "apple" , "orang", "grape", "apple", "orang"];

// let count = fruits.reduce ((acc,curr) => {

//     if(acc[curr]){
//         acc[curr]++;
//     }else{
//         acc[curr]=1 ;
//     }
//     return acc; 

// },{});

// console.log(count);

// let fruits = ["Apple", "Banana", "Orange"];

// fruits.forEach((fruit) => {
//     console.log(fruit);
// });


// let colors = [ "blue", "green", "red", "yellwo"];

// colors.forEach((color) => {
//     console.log(color);
// });

// let nums = [10,20,30,40];

// nums.forEach((num,index) => {
//     console.log(index,num);
// });

// let fruits = ["Apple", "Banana", "Orange"];

// fruits.forEach((fruit, index, array) => {
//     console.log(array);

// });

// let numbers= [10,20,30,40,50,60,70];

// let max =Math.max(...numbers);
// let max1 =Math.min(...numbers);

// console.log(`maximum value = ${max}`);
// console.log(` small value = ${max1}`);

// let numbers = [4, 9, 16, 25];

// let roots = numbers.map(num => Math.sqrt(num));

// console.log(roots);


// let numbers = [2, 3, 4];

// let result = numbers.map(num => Math.pow(num, 2));

// console.log(result);





