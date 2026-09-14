// function student(name, age){
//     this.name=name;
//     this.age = age;
// }
// let s1 = new student("sahad",21);
// let s2 = new student("swalih",19);
// let s3 = new student("aswin",20);

// console.log(s1);
// console.log(s2);
// console.log(s3);




// function* countUp() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let gen = countUp();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());




// function* no(){
//     yield 10 ; 
//     yield 20 ; 
//     yield 30 ; 
// }
// let yes = no();

// console.log(yes.next());
// console.log(yes.next());
// console.log(yes.next());
// console.log(yes.next());




// function add(a){
//     return function (b){
//         return a+b ;
//     }
// }
// console.log(add(34)(35))







// let student = {
//     name : "sahad",
//     age : 21,
//     collification : {
//         sslc : "graduated",
//         plustwo : "graduated",
//         degree : "not complited"
//     }
// }
// let data1 = {...student};

// data1.age = 22 ;
// data1.collification.degree = "complited";

// console.log(student);
// console.log(data1);







// let student = {
//     name : "sahad",
//     age : 21,
//     collification : {
//         sslc : "graduated",
//         plustwo : "graduated",
//         degree : "not complited"
//     }
// }
// let copy1 =structuredClone(student);

// copy1.collification.degree = "complited"

// console.log(student);
// console.log(copy1);


// let student = {
//     name : "sahad",
//     age : 21,
//     collification : {
//         sslc : "graduated",
//         plustwo : "graduated",
//         degree : "not complited"
//     }
// }

// let copy2 = JSON.parse(JSON.stringify(student));

// copy2.collification.degree = "complited";

// console.log(student);
// console.log(copy2);

