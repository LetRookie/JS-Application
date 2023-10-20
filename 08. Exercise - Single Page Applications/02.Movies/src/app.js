import { showView } from "./router.js";
//[x] improve HTML structure
//[x] creata app.js module
//[?] create router.js containing hide and display of view
//[x] placeholders for all views

//implement views
// - create request logic
// - DOM manipulation logic
//[ ] catalog
//[ ] login
//[ ] register
//[ ] create
//[ ] details
//[ ] like
//[ ] edit
//[ ] delete
const routes = {
    '/': homePage,
    '/login': loginPage,
    '/logout': logOutPage,
    '/register': registerPage,
    '/create' : createPage
}
document.querySelector('nav').addEventListener('click', onNavigate);
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);

function onNavigate(event){
    if (event.target.tagName == 'A' && event.target.href) {
        event.preventDefault();
        const url = new URL(event.target.href);
        const view = routes[url.pathname];
        if(typeof view =='function'){
            view();
        }
    }
}

const homeSection = document.querySelector('#home-page');
const loginSection = document.querySelector('#form-login');
const registerSection = document.querySelector('#form-sign-up');
const createSection = document.querySelector('#add-movie');
const detailsSection = document.querySelector('#movie-example');
const editSection = document.querySelector('#edit-movie');

function homePage() {
    showView(homeSection);
}
function loginPage() {
    showView(loginSection);
}
function registerPage() {
    showView(registerSection);
}
function createPage() {
    showView(createSection);
}
function detailsPage() {
    showView(detailsSection);
}
function editPage() {
    showView(editSection);
}
function logOutPage(){
    alert('You have logged out!')
}

//start application
homePage();