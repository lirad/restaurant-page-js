import './style.css';
import hero from './modules/hero';
import tabs from './modules/tabs';
import menu from './modules/menu';
import contact from './modules/contact';


const CURRENT_URL = new URL(window.location);

function loadNav() {
  document.querySelector('.nav').innerHTML = tabs();
}

const tabsLogic = () => {
  const div = document.querySelector('.content');
  const stage = new URL(window.location.hash);
  loadNav();
  switch (stage.hash) {
    case '#menu':
      div.innerHTML = menu();
      break;
    case '#contact':
      div.innerHTML = contact();
      break;
    default:
      div.innerHTML = hero();
  }
};

const urlListnerChanges = () => {
  window.onhashchange = () => tabsLogic();
};

const checkForUrl = () => {
  if (!CURRENT_URL.hash) {
    window.location.hash = '#home';
  }
};

const initialize = () => {
  document.addEventListener('DOMContentLoaded', () => {
    checkForUrl();
    tabsLogic();
    urlListnerChanges();
    loadNav();
  });
};

initialize();