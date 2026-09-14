const input = document.querySelector("input");
const savebtn = document.querySelector("#save");
const clearbtn  = document.querySelector("#clear");
const h1 = document.querySelector("h1");

savebtn.onclick=()=> {
    if(input.value){
        localStorage.setItem("token", input.value);
        h1.innerText = "welcome...."
        location.reload();
    }
};

clearbtn.onclick=() => {
    localStorage.clear();
    location.reload();
}