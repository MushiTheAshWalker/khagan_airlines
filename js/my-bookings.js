// =====================================
// MY BOOKINGS PAGE
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Khagan Airlines - My Bookings Loaded ✈");

});


// =====================================
// VIEW TICKET BUTTON
// =====================================

const viewButtons = document.querySelectorAll(".booking-buttons button:first-child");

viewButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("🎫 Ticket Preview feature will be available after backend integration.");

    });

});


// =====================================
// DOWNLOAD BUTTON
// =====================================

const downloadButtons = document.querySelectorAll(".booking-buttons .secondary");

downloadButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("⬇ Ticket download will be available after backend integration.");

    });

});


// =====================================
// BOOK NEW FLIGHT
// =====================================

const bookButton = document.querySelector(".booking-cta button");

if(bookButton){

    bookButton.addEventListener("click", () => {

        window.location.href = "flights.html";

    });

}


// =====================================
// CARD ANIMATION
// =====================================

const cards = document.querySelectorAll(".booking-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


// =====================================
// SCROLL ANIMATION
// =====================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

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