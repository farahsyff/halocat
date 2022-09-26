document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".login-wrap").classList.add("active");
});

document.querySelector(".login-wrap .close-btn").addEventListener("click",function(){
    document.querySelector(".login-wrap").classList.remove("active");
});