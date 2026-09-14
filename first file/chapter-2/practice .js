// const employee = {
//     id: 101,
//     name: "Sarah",
//     department: "HR",
//     salary: 50000
// };
// let A


// fetch("https://dummyjson.com/products")
// .then(response => response.json())
// .then((data) => {
    
//     let user = data.products.find((abc) => abc.id === 20)
//     let asd = data.forEach((aas)=> )

    
//         console.log(user);
    
    
   
// })



// let name = "sahad"

// try{
//     console.log(name);
// }catch(error){
//     console.log(error.message);
// }



//  try{
//     let user = JSON.parse('{"name":"sahad"}');
//     console.log(user);
//  }
//  catch(error){
//     console.log("invalid JSON ")
//  }



// let divide = function(a,b){

//     try{
//         if(b==0){
//             throw new Error("cannot divide by zero");
//         }

//         console.log(a*b);
//     }
//     catch(error){
//         console.log(error.message);
//     }

// }

// divide(22,33);


// function vote (x){

//     try{

//         if(x < 18){
//             throw new Error("not elgibile")
//         }
//         console.log(" You can vote");

//     }
//     catch(error){
//         console.log(error.message);
//     }
// }
// vote(17)


// let ticketPrice=100;

// function ticket(member,money){

//     try{

//         let total=member*ticketPrice;

//         if(money<total){

//             throw new Error("Not enough money");

//         }

//         console.log("Ticket Booked");

//     }

//     catch(error){

//         console.log(error.message);

//     }

// }

// ticket(5,300);



// class Animal {
//     eat(){
//         console.log("Eating...")
//     }
// }

// class dog extends Animal {}
// let d= new dog();

// d.eat();






// class persone {
//     constructor(name){
//         this.name = name ;
//     }

//     inheritance(){
//         console.log("My name is "+ this.name);
//     }
// }

// class student extends persone {

// }
// let s1 = new student("ali");
// let s2 = new student("abu");
// s1.inheritance();
// s2.inheritance();



// class persone {
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
// class customer extends persone{
//     constructor(name,age,price){
//         super(name,age);
//         this.price=price;
//     }
// }
// let customer1 = new customer("sahad ",21,500);

// console.log("name:",customer1.name);
// console.log("age:",customer1.age);
// console.log("price=",customer1.price);
 



// class student {
//     #mark = 90 ;

//     shadow(){
//         console.log(this.#mark);
//     }
// }

// let s = new student() ;
// s.shadow();



// class Bankaccount {
//     #Balance = 10000 ;


//     deposite(ammount){
//         this.#Balance += ammount ;
//     }

//     showBalance(){
//         console.log(this.#Balance);
//     }
// }

// let user = new Bankaccount(); 

// user.deposite(5000);
// user.deposite(4000);

// user.showBalance();



// function discount (persant){
//     return function (price){
//         return price - (price * persant /100);

//     };
// }

// let tenpercent = discount(10);

// console.log(tenpercent(1000));
// console.log(tenpercent(7000));








// let promis = new Promise ((resolve,reject)=>{

//     let age = 18 ;

//     if(age >=18){
//         resolve("elgible...");

//     }else{
//         reject("not elgible...")
//     }
// });

// promis
// .then((resulte)=>{
//     console.log(resulte);
// })
// .catch((error)=>{
//     console.log(error);
// });



// let promis = new Promise((resolve,reject)=>{

//     let payment = false ;

//     if(payment){
//         resolve("payment success...");
//     }else{
//         reject("payment failde...");
//     }
// });

// promis .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error)
// });




// let promis = new Promise((resolve,reject)=>{

//     let pin = false ;

//     if(pin){
//         resolve("your payment is success....");
//     }else{
//         reject("wrong pin....")
//     }
// });

// promis
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// });






// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((users) => {
//      console.log(users[9].name);
// });


   
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=> response.json())
// .then((users)=>{
//     users.forEach((users)=>{
//     console.log(users.emai)

//     })
// })



// fetch("https://jsonplaceholder.typicode.com/users")
// .then((respo)=> respo.json())
// .then((user)=>{
//     let result = user.find((result)=> result.id===3);
//     console.log(result.address.geo);
// });






// fetch("https://jsonplaceholder.typicode.com/users")
// .then((respon)=>respon.json())
// .then((users)=>{
//     console.log(users[9].phone)
// });





// async function hello() {
//     return "Hello";
// }

// console.log(hello());





// async function getdata(){

//     let respo = await fetch("https://jsonplaceholder.typicode.com/users")

//     let users = await respo.json();

//     let result = users.forEach((result)=>{

//      console.log(result.name);

//     });


// }
// getdata();









// let p1 = Promise.resolve("HTML");
// let p2 = Promise.resolve("CSS")
// let p3 = Promise.resolve("JS");

// Promise.all([p1,p2,p3])
// .then((result)=>{
//     console.log(result)
// });


// let p1 = Promise.resolve("HTML");
// let p2 = Promise.reject("CSS")
// let p3 = Promise.resolve("JS");

// Promise.all([p1,p2,p3])
// .then((result)=>{
//       console.log(result);
// });




// let p1 = new Promise((resolve)=>{
//     setTimeout(()=> resolve("bike"),1000);
// });
// let p2 = new Promise((resolve)=>{
//     setTimeout(()=> resolve("car"),2000);
// });

// Promise.race([p1,p2])
// .then((result)=>{
//     console.log(result);
// });





// let p1 = Promise.resolve("HTML");
// let p2 = Promise.reject("CSS")
// let p3 = Promise.resolve("JS");

// Promise.allSettled([p1,p2,p3])
// .then((result)=>{
//     console.log(result);
// });

// let p1 = Promise.reject("Server 1 Down");
// let p2 = Promise.resolve("Server 2 Success");
// let p3 = Promise.resolve("Server 3 Success");

// Promise.any([p1,p2,p3])
// .then((result)=>{
//     console.log(result);
// });




