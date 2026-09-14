// do ( i=5 ){
//     console.log(i)
// i++;
// }while(<=10)

//     {
//     var a = 10;
// }

// console.log(a);

let num = 10;

for( let i=1; i<=num; i++){
    let star="";

    for(let j=1; j<=num; j++){
        if(i==1 || i==10 || j==1|| j==10){
             star+="*";
        }else{
        star+=" ";
        }
    }
    console.log(star)
}