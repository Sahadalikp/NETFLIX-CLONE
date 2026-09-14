let nums=[1,2,3,4,5,6,7,8,9,10];

// console.log(nums[8]);




function evennumbers(arr,type){
    let odd=[];
    let even=[];

    for(let i=0; i<arr.length; i++){
        // console.log(nums[i]);
            if(arr[i] % 2!=0){
                odd[odd.length]=arr[i];
            }else{
                even[even.length]=arr[i];
            }

    }

    if(type==="odd"){
        return odd
    }else{
        return even
    }
    // return {"even":even,"odd":odd} ;
}


console.log( evennumbers(nums,"even"));