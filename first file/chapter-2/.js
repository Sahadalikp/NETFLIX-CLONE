fetch("https://jsonplaceholder.typicode.com/comments")
.then((user)=>user.json())
.then((result)=>{
    let abc = result.forEach((abc)=>{
        console.log(abc.email);
    });
});

