// navbar responsive

let nav_bar = document.querySelector(".icon-top-mob-res-div");

nav_bar.addEventListener("click", () => top_nav());

let header_nav = document.querySelector(".Navbar-div-main");

let top_nav = () => {
    header_nav.classList.toggle("active-nav-res");
};