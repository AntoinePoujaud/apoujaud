// CONCERNE L'APPARITION / DISPARITION DU MENU LORSQUE L'ON 
// CLIQUE SUR LA FLECHE DESSOUS LE LOGO

const navlinks = document.getElementById("menu");
const navButton = document.getElementById("open-menu");

const triggerNavbar = () => {
    if(navlinks.style.display === "none") {
        navlinks.style.display = "flex";
    }
    else {
        navlinks.style.display = "none";
    }
}
    navButton.onclick = triggerNavbar;
