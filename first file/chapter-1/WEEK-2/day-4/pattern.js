let i,j;

for( i=1; i<=7 ;i++){
    for(j=1; j<=7; j++){

        if(j<= 8-i ){
            process.stdout.write(" * ");

        }else{
             process.stdout.write("  ");


        }
       
    }
 console.log(" ");
}


// let i,j;

// for(i=1; i<=5; i++){
//     for( j=i; j<=5; j++){

//         if(j>=i){
//             process.stdout.write("* ");
        
//         }else{
//             process.stdout.write("  ");

//         }
//     }
//     console.log(" ");
// }


// let i,j;

// for ( i=1; i<=5; i++){
//     for(j=1; j<=9; j++){

//         if(j>=6-i && j<=4+i){
//             process.stdout.write("* ");
//         }else{
//             process.stdout.write("  ");
//         }
//     }
//     console.log("");
// }




// for( i=1; i<=5; i++){
//     k=1;
//     for(j=1; j<=9; j++){

//         if(j>=6-i && j<=4+i && k ){
//             process.stdout.write("*  ");
//             k=0;
//         }
//         else{
//             process.stdout.write("   ");
//             k=1;
//         }
//     }
//     console.log("");
// }



// for( i=1; i<=5; i++){
//     for(j=1; j<=9; j++){

//         if(j<=6-i || j>=4+i){
//             process.stdout.write(" * ");
//         }
//         else{
//             process.stdout.write("   ");
//         }
//     }
//     console.log("")
// }

  
// for( i=1; i<=4; i++){
//     k=1
//     for(j=1; j<=7; j++){

//         if(j>=5-i && j<=3+i && k){
//             process.stdout.write(String( k));
//             j<4?k++: k--;
            
//         }
//         else{
//             process.stdout.write(" ");

//         }
//     }
//     console.log(" ");
// }


// let k=0;

// for ( i=1; i<=9; i++){
//        i<=4?k++:k--;
//     for(j=1; j<=5; j++){
        
//         if(j>=k ){
//             process.stdout.write("* ");
           
//         }else{
//             process.stdout.write("  ");
//         }
//     }
//     console.log(" ");
// }


// for( i=1; i<=7; i++){
//     for(j=1; j<=7; j++){

//         if((i==1 || i==7 || j==1 || j==7) || (i >=3&& i<5&& j>=3&& j>=5)&&(i==3
//              || i==5 || j==3 || j==5)){
//             process.stdout.write("* ");
//         }
//         else{
//             process.stdout.write("  ");
//         }
//     }
//     console.log(" ");
// }


// let k=0;

// for ( i=1; i<=9; i++){
//        i<=5?k++:k--;
//     for(j=1; j<=5; j++){
        
//         if(j>=k ){
//             process.stdout.write("* ");
           
//         }else{
//             process.stdout.write("  ");
//         }
//     }
//     console.log(" ");
// }