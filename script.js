function toggleMenu() {
    const menu = document.getElementById("mob-menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function hideMenu() {
    document.getElementById("mob-menu").style.display = "none";
}