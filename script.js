let sabkuchh = document.querySelector(".dark i");

sabkuchh.addEventListener("click",()=>{
    document.body.classList.toggle("lightTheme");
})

let hamBurger = document.querySelector(".hamBurger")
hamBurger.addEventListener("click",()=>{
    document.querySelector(".hamItems").style.transform = "translateX(0px)"
})
 
let cross = document.querySelector(".cross")
cross.addEventListener("click",()=>{
    document.querySelector(".hamItems").style.transform = "translateX(-1000px)"
})

