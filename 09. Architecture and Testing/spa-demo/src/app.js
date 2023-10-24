import { showHome } from "./home.js";
import { showCatalog } from "./catalog.js";
import { showAbout } from "./about.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
import { checkUserNav, onLogout } from "./util.js";
import { showCreate } from "./create.js";

document.querySelector('nav').addEventListener('click', onNavigate);
document.getElementById('logoutBtn').addEventListener('click', onLogout);

showHome();//On start application shows the home page
checkUserNav(); //On start app controls the display of user nav buttons

const sections = {
    'homeBtn': showHome,
    'catalogBtn': showCatalog,
    'aboutBtn': showAbout,
    'loginBtn': showLogin,
    'registerBtn': showRegister,
    'createBtn': showCreate
}

function onNavigate(event) {
    if (event.target.tagName == 'A') {
        const view = sections[event.target.id];

        if (typeof view == 'function') {
            event.preventDefault();
            view();
        }
    }
};

