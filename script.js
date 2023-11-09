let sabkuchh = document.querySelector(".dark i");
let body = document.querySelector("body");
let navBar = document.querySelector("#navbar");
let header = document.querySelector("header");
let menu = document.querySelector(".menu");
let profile = document.querySelector(".profile a");
let cart = document.querySelector(".cart");
let dark = document.querySelector(".dark i");
let searchBar = document.querySelector(".search input");
let panel = document.querySelector(".panel");
const list = document.querySelectorAll(".option-link");
let mobile = document.querySelector(".mobi span a");
let headphone = document.querySelector(".headphone span a");
let earphone = document.querySelector(".earphone span a");
let keyboard = document.querySelector(".keyboard span a");
let television = document.querySelector(".tele span a");
let wearable = document.querySelector(".wear span a");
let music = document.querySelector(".music span a");
const head = document.querySelectorAll(".head");
const offer = document.querySelectorAll(".offer-boxes");
const del = document.querySelectorAll(".name span del");
let newCus = document.querySelector(".foot-btn span");
let back = document.querySelector(".foot1 a")
let foot = document.querySelector(".foot")
let info = document.querySelector("#contact h2")
let inp = document.querySelector("#contact input")
let copy = document.querySelector(".copy p")
let whatsapp = document.querySelector(".whatsapp")
const icon = document.querySelectorAll(".icon")
const about = document.querySelectorAll(".about p ")
const mypro = document.querySelectorAll(".myProducts li")
const abPro = document.querySelectorAll(".aboutUs li")


let flag = 0
sabkuchh.addEventListener("click", () => {
    if (flag == 0) {
        body.style.backgroundColor = "aliceblue"
        navBar.style.backgroundColor = "rgb(204, 240, 240)"
        header.style.backgroundColor = "rgb(204, 240, 240)"
        menu.style.color = "black"
        profile.style.color = "black"
        cart.style.color = "black"
        dark.style.color = "black"
        searchBar.style.border = "0.2px solid black"
        panel.style.backgroundColor = "aliceblue"
        panel.style.border = "0.2px solid black"
        for (let i = 0; i < list.length; i++) {
            list[i].style.color = "black";
        }
        mobile.style.color = "black"
        headphone.style.color = "black"
        earphone.style.color = "black"
        keyboard.style.color = "black"
        television.style.color = "black"
        wearable.style.color = "black"
        music.style.color = "black"
        for(let j = 0; j<head.length; j++){
            head[j].style.color = "black"
        }
        for(let k = 0; k<offer.length; k++){
            offer[k].style.color = "black"
            offer[k].style.backgroundColor = "white"
        }
        for(let l = 0; l<del.length; l++){
            del[l].style.color = "grey"
        }
        newCus.style.color = "black"
        back.style.backgroundColor = "azure"
        back.style.color = "black"
        back.style.border = "0.3px solid black"
        foot.style.backgroundColor = "rgb(204, 240, 240)"
        info.style.color = "black"
        inp.style.border = "0.3px solid black"
        copy.style.color = "black"
        whatsapp.style.color = "black"
        for(let m = 0; m<icon.length; m++){
            icon[m].style.color = "black"
        }
        
        for(let p = 0; p<about.length; p++){
            about[p].style.color = "black"
        }
        
        for(let n = 0; n<mypro.length; n++){
            mypro[n].style.color = "black"
        }

        for(let q = 0; q<abPro.length; q++){
            abPro[q].style.color = "black"
        }
        flag = 1
    }
    else {
        body.style.backgroundColor = "black"
        navBar.style.backgroundColor = "black"
        header.style.backgroundColor = "black"
        menu.style.color = "white"
        profile.style.color = "white"
        cart.style.color = "white"
        dark.style.color = "white"
        searchBar.style.border = "none"
        panel.style.backgroundColor = "rgb(53, 48, 48)"
        panel.style.border = "none"
        for (let i = 0; i < list.length; i++) {
            list[i].style.color = "white";
        }
        mobile.style.color = "white"
        headphone.style.color = "white"
        earphone.style.color = "white"
        keyboard.style.color = "white"
        television.style.color = "white"
        wearable.style.color = "white"
        music.style.color = "white"
        for(let j = 0; j<head.length; j++){
            head[j].style.color = "white"
        }
        for(let k = 0; k<offer.length; k++){
            offer[k].style.color = "white"
            offer[k].style.backgroundColor = "black"
        }
        newCus.style.color = "white"
        back.style.backgroundColor = "rgb(70, 67, 67)"
        back.style.color = "white"
        back.style.border = "none"
        foot.style.backgroundColor = " rgb(34, 33, 33)"
        info.style.color = "white"
        inp.style.border = "none"
        copy.style.color = "white"
        whatsapp.style.color = "white"
        for(let m = 0; m<icon.length; m++){
            icon[m].style.color = "white"
        }
        for(let p = 0; p<about.length; p++){
            about[p].style.color = "white"
        }
        for(let n = 0; n<mypro.length; n++){
            mypro[n].style.color = "white"
        }
        for(let q = 0; q<abPro.length; q++){
            abPro[q].style.color = "white"
        }

        flag = 0
    }
})