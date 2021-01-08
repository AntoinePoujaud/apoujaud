// CONCERNE L'APPARITION / DISPARITION DU MENU LORSQUE L'ON 
// CLIQUE SUR LA FLECHE DESSOUS LE LOGO

const navlinks = document.getElementById("menu");
const navButton = document.getElementById("open-menu");

const triggerNavbar = () => {
    if(navlinks.classList.contains("invisible")) {
        navlinks.classList.remove('invisible');
    }
    else {
        navlinks.classList.add('invisible');
    }
    
}
    navButton.onclick = triggerNavbar;
