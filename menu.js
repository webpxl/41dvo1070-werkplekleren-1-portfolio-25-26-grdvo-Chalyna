// menu.js

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger || !navMenu) return; // veiligheid: als elementen niet bestaan, stop

    // Toggle menu bij klik op hamburger
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Sluit menu wanneer je op een link klikt (heel belangrijk voor navigatie!)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Optioneel maar sterk aanbevolen: sluit menu als je buiten menu/hamburger klikt
    document.addEventListener('click', function (event) {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});