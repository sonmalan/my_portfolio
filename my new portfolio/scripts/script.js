

function openNavigation() {
    document.querySelector('body').style.overflowY = "hidden";
    document.getElementById('navigation').classList.add("active");
}

function closeNavigation() {
    document.querySelector('body').style.overflowY = "auto";
    document.getElementById('navigation').classList.remove("active");
}