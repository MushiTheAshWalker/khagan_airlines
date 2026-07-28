// =============================
// ABOUT PAGE
// =============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Welcome to Khagan Airlines - About Page ✈");

});


// =============================
// CTA BUTTON
// =============================

const ctaButton = document.querySelector(".cta button");

if (ctaButton) {

    ctaButton.addEventListener("click", () => {

        window.location.href = "flights.html";

    });

}


// =============================
// TEAM CARD ANIMATION
// =============================

const teamCards = document.querySelectorAll(".team-card");

teamCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


// =============================
// SMOOTH FADE-IN
// =============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(40px)";

    section.style.transition = "all .8s ease";

    observer.observe(section);

});