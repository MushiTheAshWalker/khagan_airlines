// =============================
// Sticky Navbar
// =============================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// =============================
// Hero Button
// =============================

const heroBtn = document.querySelector(".hero-btn");

if (heroBtn) {

    heroBtn.addEventListener("click", function () {

        document.querySelector(".search-section").scrollIntoView({

            behavior: "smooth"

        });

    });

}


// =============================
// Search Form
// =============================

const searchForm = document.getElementById("searchForm");

if (searchForm) {

    searchForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const from = document.getElementById("from").value.trim();
        const to = document.getElementById("to").value.trim();
        const date = document.getElementById("date").value;
        const travelClass = document.getElementById("travelClass").value;

        if (from === "" || to === "") {

            alert("Please enter From and To.");

            return;

        }

        localStorage.setItem("from", from);
        localStorage.setItem("to", to);
        localStorage.setItem("date", date);
        localStorage.setItem("class", travelClass);

        window.location.href = "flights.html";

    });

}


// =============================
// Card Hover Animation
// =============================

const cards = document.querySelectorAll(".card, .destination-card, .service");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";
        card.style.transition = "0.4s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// =============================
// Fade-in Animation
// =============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

const sections = document.querySelectorAll("section");

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";

    observer.observe(section);

});


// =============================
// Footer Year
// =============================

const copyrightEl = document.querySelector(".copyright");

if (copyrightEl) {

    const year = new Date().getFullYear();

    copyrightEl.innerHTML =
    `© ${year} SkyBook Airlines. All Rights Reserved.`;

}


// =============================
// Welcome Message
// =============================

window.onload = function () {

    console.log("Welcome to SkyBook Airlines ✈");

};

// =============================
// HOME BOOK FLIGHT
// =============================

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(button => {

    button.addEventListener("click", function () {

        const destination = this.dataset.destination;

        localStorage.setItem("selectedDestination", destination);

        window.location.href = "flights.html";

    });

});