import "./style.css"
import { hero } from "./modules/hero"
import { tabs } from "./modules/tabs"
import heroImage from './images/8bit-burguer.jpg'

const CURRENT_URL = new URL(window.location);

document.addEventListener("DOMContentLoaded", function () {
    checkForUrl();
    tabsLogic();
    let navEl = document.getElementsByName('nav')
    navEl.forEach(
        (item) => item.addEventListener('click', () => tabsLogic())
    )
});

const tabsLogic = () => {
    let div = document.querySelector('.content');
    switch (window.location.hash) {
        case "#home":
            console.log('home')
            div.innerHTML = hero();
            document.querySelector('.flex.flex-col.p-5.justify-center').innerHTML += tabs();
            break;
        case "#menu":
            console.log('menu')
            div.innerHTML = '<p>Menu</p>';
            break;
        case "#contact":
            console.log('contact')
            div.innerHTML = '<p>Contact</p>';
            break;
    }
}

const checkForUrl = () => {
    if (!CURRENT_URL.hash) {
        window.location.hash = "#home"
    }
}
