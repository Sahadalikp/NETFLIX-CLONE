// const add = (x,y) =>  x*y;
// let result = add(3,4);

// const multiply = (a, b) => a * b;
// let result = multiply(4, 5);

// console.log(result);
// console.log(result);
// result = multiply(10, 34);
// console.log(result);


// const add = (a, b) => {
//     return a + b;
// }

// console.log(add(5, 3));
// console.log(add(10,32))

// const add=(a,b) =>a+b ;
// console.log(add(6,7));


// (function name (sahad,ali){
//      let name = sahad+ali
//      console.log(name);
// })(300,455)

// function greet(name, adn) {
//     console.log("Hello " + name);
//     adn();
// }

// function say() {
//     console.log("Good Bye!");
// }

// greet("Ali", say);


// function names (hay , callback){
//      console.log("hello", +hay );
//      callback();
// }

//  names("ali", () =>{
//      console.log("good bay");
// })


// function sahad(we,back){
//      console.log("welcome "+ we);
//      back();
// }
// function yes(){
//      console.log("keep smile");
// }
// sahad("ali", yes);

// (() =>{
//    console.log("welcome our world ")
// })();

// ((name)=>{
//    console.log("welcome  "+ name );
// })("Rinshad");

// const arry1 = [1,2,3,4];
// const arry2 = [...arry1];
// console.log(arry2);

// const arry1=[1,2];
// const arry2=[3,4];
// const arry3=[...arry1,...arry2];

// console.log(arry3);

// const person={
//    name:"sahad",
//    age:21
// };
// const newperson={...person};

// console.log(newperson);

// const obj1={name:"sahad"};
// const obj2={age:21};

// const obj3={...obj1,...obj2};

// console.log(obj3);

//rest//

// function sum(...numbers){
//    console.log(numbers);
// }
// sum(10,20,30,40);

// function sum (...numbers){
//    let total=0;

//    for (let num of numbers){
//       total += num;
//    }
//    console.log(total);

// }

              

// const arr = [1, 2, 3, 4, 5];

// const [first, ...rest] = arr;

// console.log(first);
// console.log(rest);


//  const arry=[1,2,3,4];
//  const arry1=[...arry];

//  console.log(arry1);




// <<<<<<<<<<<<<<<<<<<<<<<// Array Destructuring//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// const fruits = ["apple","orang","grape"];
// const [a,b,c] = fruits;

// console.log(a)
// console.log(b)
// console.log(c)

                 // Values Skip//

// const color =["red","green","blue"];
// const [first, third]= color;

// console.log(color);
// console.log(first);
// console.log(third);



               // Rest Operator//

// const color =["red","green","blue"];
// const [first, ...keep]= color;

// console.log(first);
// console.log(keep);

             // Default Values//

// const number= [10];
// const [a,b=20]=number;

// console.log(a);
// console.log(b);

            // Variables Swap//

// let a =10;
// let b =20;

// [a,b]=[b,a];

// console.log(a);
// console.log(b);

            // Function Return Values//

// function data(){
//    return["ali",21];
// }
// const [name,age]= data();

// console.log(name);
// console.log(age);


                 // Nested Array Destructuring//

   // const data = [1,[2,3]];
   
   // const [a,[b,c]]=data;

   // console.log(a)
   // console.log(b)
   // console.log(c)

                    // real world example//
   
   // const student = ["sahad", 21 , "pmna"];
   
   // const [name,age,place]=student;

   // console.log(`name: ${name}`);
   // console.log(`age: ${age}`);
   // console.log(`place: ${place}`);






// let age = 25
// let bio = `allice is ${age} years.old` ;
// // console.log(bio);

// document.getElementById("allice").innerHTML= bio;

 

