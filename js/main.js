const hamburger = document.querySelector(".hamburger");
const navMenu  = document.querySelector(".main-blocks");
const navvMenu  = document.querySelector(".button-1");
const navvvMenu  = document.querySelector(".main-img");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active"); 
    navMenu.classList.toggle("active"); 
    navvMenu.classList.toggle("active"); 
    navvvMenu.classList.toggle("active"); 
})