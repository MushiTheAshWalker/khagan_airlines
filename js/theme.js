// =============================
// SkyBook Airlines Theme
// =============================

document.addEventListener("DOMContentLoaded", function () {

    const themeIcon = document.getElementById("theme-icon");

    // If this page has no theme icon, do nothing
    if (!themeIcon) return;

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    } else {

        document.body.classList.remove("dark");

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

    }

    // Toggle theme
    themeIcon.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");

        } else {

            localStorage.setItem("theme", "light");

            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");

        }

    });

});