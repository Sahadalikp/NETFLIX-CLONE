// let promise=new Promise((resolve,reject)=>{

// if(1 <5){
//     resolve("it is right")
// }else{
//     reject("it is not correct")
// }

// })
// promise
// .then((result)=>console.log(result))
// .catch((error)=>console.log(error))



// let promis = new Promise(function(resolve,reject){

//     let marck = 51 ;

//     if(marck >=50 ){
//         resolve("pass");
//     }else{
//         reject("Fail");

//     }
// });

// promis
// .then(function(result){
//     console.log(result);
// })
// .catch(function(erorr){
//     console.log(erorr)
// });




// let promis = new Promise(function(resolve,reject){

//     let age = 9 ;

//     if(age >=18 ){
//         resolve("Elgible...");
//     }else{
//         reject("Not elgible....");
//     }
// });
// promis .then(function(holder){
//     console.log(holder);
// })
// .catch(function(erorr){
//     console.log(erorr);
// });




/////////////////////////////////////////////////////////////////////////////


// - |

// let p1 = Promise.resolve("HTML");
// let p2 = Promise.resolve("CSS");
// let p3 = Promise.resolve("JAVASCRIPT");

// Promise.all([p1,p2,p3])
// .then((result)=>{
//     console.log(result);
// });



// - a


// let p1 = Promise.resolve("HTML");
// let p2 = Promise.reject("CSS Erorr");
// let p3 = Promise.resolve("JAVASCRIPT");

// Promise.all([p1,p2,p3])
// .catch((erorr)=>{
//         console.log(erorr);
// });


// - ||

// let p1 = Promise.resolve("HTML");
// let p2 = Promise.reject("CSS Erorr");
// let p3 = Promise.resolve("JAVASCRIPT");

// Promise.allSettled([p1,p2,p3])
// .then((result)=>{
//     console.log(result);
// })


//  - |||




// let p1 = new Promise(resolve =>{
//     setTimeout(()=>{
//         resolve("HTML");
//     },5000);
// });
// let p2 = new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve("CSS");
//     },3000);
// });

// Promise.race([p1,p2])
// .then((result)=>{
//     console.log(result);
// });




///////////////////



// let p1 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         reject("server erorr");
//     },1000);
// });
// let p2 = new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve("success");
//     },2000);
// });

// Promise.race([p1,p2])
// .then((result)=>{
//     console.log(result);
// })
//  .catch((erorr)=>{
//     console.log(erorr);
// });




// let p1 = Promise.reject("erorr");

// let p2 = new Promise(resolve => {
//     setTimeout(()=>{
//         resolve("HTML");
//     },2000);
// });
// let p3 = new Promise(resolve =>{
//     setTimeout(()=>{
//         resolve("CSS");
//     },5000);
// });

// Promise.any([p1,p2,p3])
// .then((result)=>{
//     console.log(result);
// });



///////////////////////////////////////


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data =>  {

//     console.log(data);
// });


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// });


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => {

//     data.forEach(user=> {
//         console.log(user.id)
//     })
// })





// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => {
//     data.forEach(user => {
//         console.log(user.email);
//     });
// });



// fetch("https://jsonplaceholder.typicode.com/users")
// .then(ab => ab.json())
// .then(data => {

//     let user = data.find(user=> user.id===5)

//     console.log(user);
// })



// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then








// async function eatPizza() {

//     let pizza = await orderPizza();

//     console.log(pizza);
// }

// eatPizza();

// async function getUsers() {

//     let response = await fetch("https://jsonplaceholder.typicode.com/users");

//     let users = await response.json();

//     console.log(users);

// }

// getUsers();



// function makeTea() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("☕ Tea Ready");
//         }, 3000);
//     });
// }

// async function drinkTea() {
//     let tea = await makeTea();

//     console.log(tea);
// }

// drinkTea();



// async function getUsers () {
    
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");

//     let user = await response.json();

//     console.log(user);

// }
// getUsers();





















