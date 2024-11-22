// // PARTIE page ecriture pour le site

// const sidebar = document.querySelector('.sidebar');
// const toggleBtn = document.querySelector('.toggle-btn');

// toggleBtn.addEventListener('click', () => {
//     sidebar.classList.toggle('active');
// })










// PARIE POUR LA CONNEXION DU SITE


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
/*const iconClose = document.querySelector('.');*/

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

/*.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});*/