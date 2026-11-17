
// Select the menu button
const menuBtn = document.getElementById("menuBtn");

// Select the navigation links
const navLinks = document.getElementById("navLinks");

// When menu button is clicked
menuBtn.addEventListener("click", function () {

    // Toggle the active class
    navLinks.classList.toggle("active");

});

// Close menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});
