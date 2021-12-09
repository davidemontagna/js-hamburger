const opened = document.querySelector(".header-right > a");
const hamburger = document.querySelector(".hamburger-menu");
const closed = document.querySelector(".close");

opened.addEventListener("click", function(){
    hamburger.classList.add("active");
});

closed.addEventListener("click", function(){
    hamburger.classList.remove("active");
});