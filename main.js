const pass = document.querySelector("input");
const showBtn = document.querySelector("span i");
showBtn.onclick = (()=> {
    if(pass.type === "password"){
        pass.type = "text";
        showBtn.classList.add("hide-btn");
    }else{
        pass.type = "password";
        showBtn.classList.remove("hide-btn");
    }
});