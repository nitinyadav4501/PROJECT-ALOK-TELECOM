let mode = document.querySelector(".dark i");

mode.addEventListener("click", () => {
    document.body.classList.toggle("lightTheme");
})

// Hamburger **************************************
let hamBurger = document.querySelector(".hamBurger")
hamBurger.addEventListener("click", () => {
    document.querySelector(".hamItems").style.transform = "translateX(0px)"
})

let cross = document.querySelector(".cross")
cross.addEventListener("click", () => {
    document.querySelector(".hamItems").style.transform = "translateX(-1000px)"
})


// search for phone ************************************
let glassForPhone = document.querySelector(".glassForPhone")
let show = true;
glassForPhone.addEventListener("click", () => {
    if (show === true) {
        document.querySelector(".searchPhone input").style.transform = "scale(1)";
        show = false
    }
    else {
        document.querySelector(".searchPhone input").style.transform = "scale(0)";
        show = true
    }

})


