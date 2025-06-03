
window.addEventListener('scroll', function () {
    let navbar = document.getElementById('navbar');
    let backup = document.getElementById('backup');

    if (window.scrollY > 50) {
        navbar.classList.add("sticky-nav");
    }
    else {
        navbar.classList.remove("sticky-nav");
    }

    if (this.window.scrollY > 90) {
        backup.classList.add("backup");
    } else {
        backup.classList.remove("backup");
    }

});







