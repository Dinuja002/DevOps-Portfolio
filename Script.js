
// Mobile Navigation

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isExpanded);

});


// Close Navigation After Clicking a Link

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// Automatically Update Footer Year

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();
