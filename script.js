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
let newCus = document.querySelector(".foot-btn span")


let flag = 0
sabkuchh.addEventListener("click", () => {
    if (flag == 0) {
        body.style.backgroundColor = "aliceblue"
        navBar.style.backgroundColor = "cornsilk"
        header.style.backgroundColor = "cornsilk"
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
        flag = 0
    }

})