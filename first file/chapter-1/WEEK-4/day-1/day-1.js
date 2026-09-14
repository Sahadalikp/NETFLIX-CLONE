// let head = document.querySelector("h1");
// let pg =document.querySelectorAll(".para");


// head.style.backgroundColor="green";
// head.style.color="white";
// head.style.padding="10px"
// head.style.fontSize= "60px";





// function hi (...d){

// console.log(d);

// }
// hi(1,2,3,4)




// let a = [1,2,3,4,5];

// let b =[...a];
// a.push(6)

// console.log(b);
// console.log(a);


// function outer() {
//   let name = "Jaseel";

//   function inner() {
//     console.log(name); // Can access parent's variable
//   }

// return inner();
// }

// outer(); // Jaseel

// let arr = [1,2,3,4,5];

// function doubil (x) {
//     return x *2 ;
// }
// const output =arr.map(doubil);
// console.log(output);

//  let arr = [1,2,3,4,5];

// let arr1 = arr.filter((a)=>{
//     return a %2==0;
// });

// console.log(arr1);







///////////////////////////////////////////////////////////////////////////////////////////////











// let arr =[1,2,3,4,5,6,7,8,9,10];

// let result = arr.map(function(num){
//     return num*2 ;
// })
// console.log(result);
// console.log("orginal",arr);



// let mark = [30,40,50,60,70];

// let newmark = mark.map(function(mark){
//     return mark +10 ;
// })
// console.log(newmark);


// let names = ["swalih","sreerag","ashwin"];

// let updatenme = names.map((name)=>{
//     return name.toUpperCase();
// });
// console.log(updatenme);






// let names = ["SWALIH","SREERAG","ASHWIN"];

// let newnames = names.map((name)=>{
//     return name.toLowerCase();
// });
// console.log(newnames);




// let money = [100,200,300];

// let moneylue = money.map((value)=>{
//     return "₹" + value;
// });
// console.log(moneylue);


// let nums = [2,3,4,5,6];

// let sqouer = nums.map((num)=>{
//     return num*num ;
// });
// console.log(sqouer); 



// let ages = [10,20,16,22,19,20];

// let elgible = ages.map((age)=>{
//     return age >=18 ;

// });
// console.log(elgible);





// let  stdnt = [
//     {name:"sahad",mark :50 },
//     {name:"swalih",mark :70},
//     {name:"shaham",mark :60}
// ]
// let mark = stdnt.map((st)=>{
//     return st.mark;
// });
// console.log(mark);




// let students = [
//     {name:"sahad",mark :50 },
//     {name:"swalih",mark :70},
//     {name:"shaham",mark :60}
// ]
// let pass = students.map((student)=>{
//     return {
//         name: student.name ,
//         mark: student.mark ,
//         pass: student.mark >50

//     };
// });
// console.log(pass);



// let foods = [
//     {
//         name:"Burger",
//         price:120
//     },
//     {
//         name:"Pizza",
//         price:250
//     },
//     {
//         name:"Shawarma",
//         price:180
//     }
// ];

// let menu = foods.map((item)=>{
//     return {
//         name:item.name,
//         price: "$" + item.price
//     };
// });
// console.log(menu);



//////////////////////////////////////////////////////////////////////////////////////




// let nums = [1,2,3,4,5,6,7,8,9];

// let even = nums.filter(num => num %2==0)

// console.log(even);




// let nums = [1,2,3,4,5,6,7,8,9];

// let odd = nums.filter(num => num %2 !==0)

// console.log(odd);




// let ages = [12, 18, 20, 15, 25, 30];

// let elgible = ages.filter(age => age<=18);

// console.log(elgible);




// let words = ["Apple", "Banana", "Cat", "Elephant", "Dog"];

// let longword = words.filter(word => word.length>5);
// console.log(longword);


// let datas = [
//     {name: "sahad",mark :70 },
//     {name: "swalih",mark :55 },
//     {name: "ashwin",mark :35 },
//     {name: "shaham",mark :62 },
// ];
// let passmark = datas.filter(data => data.mark >50);
// console.log(passmark); 
 




// let foods = [
//     { name: "Burger", price: 150 },
//     { name: "Pizza", price: 350 },
//     { name: "Shawarma", price: 180 },
//     { name: "Biryani", price: 250 }
// ];

// let lowprise = foods.filter(food => food.price <=200);

// console.log(lowprise);




// let products = [
//     { name: "Laptop", stock: true },
//     { name: "Phone", stock: false },
//     { name: "Keyboard", stock: true },
//     { name: "Mouse", stock: false }
// ];
// let real = products.filter(prodect => prodect.stock);
// console.log(real);





// let empolyees = [
//     {name : "sahad", salary : 50000},
//     {name : "swalih", salary : 45000},
//     {name : "sreerag", salary : 65000},
//     {name : "sinan", salary : 30000},
//     {name : "shaham", salary : 75000}
// ];
// let hightposition = empolyees.filter(emplo => emplo.salary >=49000);
// console.log(hightposition);







// let hospital = [
//     {name : "sahad", age : 51},
//     {name : "swalih", age : 45},
//     {name : "sreerag", age : 65},
//     {name : "sinan", age : 34},
//     {name : "shaham", age : 78}
// ];
// let olders = hospital.filter(passionts => passionts.age>55);
// console.log(olders);




// let nums = [ 10,20,30,40];

// let sum = nums.reduce((acc,crr)=> acc*crr );
// console.log(sum);



// let nums = [10,20,30,40];

// let sum = nums.reduce((acc,crr)=>{
//     return acc+crr ;
// },0);
// console.log(sum);




// let nums = [10,20,1,30,40,5,50,60];

// let bignums = nums.reduce((acc,crr)=> {
    
//     if(crr<acc){
//         return crr ;
//     };
//     return acc ;
// });
// console.log(bignums);


// let words = ["sahad","swalih","shaham"];

// let A_z = words.reduce((acc,word)=>{
//     return acc+word.length ;
// },0);
// console.log(A_z);

// let count = words.reduce((acc,word)=> (acc+word.length),0);

// console.log("names",words);
// console.log("spelling count",count);




// Random number between 1 and 10
// let random = Math.floor(Math.random() * 10) + 1;
// console.log(random);


// let fruits = ["apple","orang","grape"];
// fruits.forEach((fruit,index)=>{
//     console.log(index,fruit);
// }) 


// let nums= [1,2,3,4,5,6,7,8];

// nums.forEach((num) => {

//     if(num%2!==0){

//         console.log(num);
//     }
    
// });



// let num =[1,2,3,4,5,6,7,8];
// let sum =0;

// num.forEach((n)=>{
//     sum+=n;


// })

//     console.log(sum)


// let names = [ "SAHAD","swali","ASHWIN"];


// names.forEach((name)=> {

//     console.log(name.toLowerCase());

//  });

// let names = [ "SAHAD","sali","ASHWIN"];

// names.forEach((name)=>{
//     if(name.length>4){
//         console.log(name);
//     }
// })




//  let name = [1,2,3];
//  let nu= [...name,4,5];
// console.log(nu);














