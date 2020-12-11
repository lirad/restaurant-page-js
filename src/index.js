import "./style.css"
import { hero } from "./modules/hero"
import { tabs } from "./modules/tabs"
import { menu } from "./modules/menu"


const CURRENT_URL = new URL(window.location);

const initialize = () => {
    document.addEventListener("DOMContentLoaded", function () {
        checkForUrl();
        tabsLogic();
        listenHashChange();
        loadNav();
    });
}

const loadNav = () => document.querySelector('.nav').innerHTML = tabs();


const tabsLogic = () => {
    
    let div = document.querySelector('.content');
    let stage = new URL(window.location.hash);
    switch (stage.hash) {
        case "#home":
            div.innerHTML = hero();
            break;
        case "#menu":
            div.innerHTML = menu();
            break;
        case "#contact":
            div.innerHTML = '<p>Contact</p>';
            break;
    }
}

const listenHashChange = () => {
    window.onhashchange = function () {
        tabsLogic();
    }
}

const checkForUrl = () => {
    if (!CURRENT_URL.hash) {
        window.location.hash = "#home"
    }
}


initialize();