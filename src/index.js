import "./style.css"
import { hero } from "./modules/hero"
import { tabs } from "./modules/tabs"
import { menu } from "./modules/menu"
import contact from "./modules/contact"


const CURRENT_URL = new URL(window.location);

const initialize = () => {
    document.addEventListener("DOMContentLoaded", function () {
        checkForUrl();
        tabsLogic();
        urlListnerChanges();
        loadNav();
    });
}

const loadNav = () => document.querySelector('.nav').innerHTML = tabs();


const tabsLogic = () => {
    let div = document.querySelector('.content');
    let stage = new URL(window.location.hash);
    loadNav();
    switch (stage.hash) {
        case "#home":
            div.innerHTML = hero();
            break;
        case "#menu":
            div.innerHTML = menu();
            break;
        case "#contact":
            div.innerHTML = contact();
            break;
    }
}

const urlListnerChanges = () => {
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