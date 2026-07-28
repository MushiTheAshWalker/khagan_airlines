// ===============================
// DESTINATION SEARCH
// ===============================

const searchInput = document.getElementById("searchDestination");

const cards = document.querySelectorAll(".destination-card");

searchInput.addEventListener("keyup", function () {

    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {

        const city = card.querySelector("h3").textContent.toLowerCase();

        const country = card.querySelector("p").textContent.toLowerCase();

        if (city.includes(value) || country.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


// ===============================
// BOOK FLIGHT BUTTON
// ===============================

const buttons = document.querySelectorAll(".destination-card button");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        const card = this.closest(".destination-card");

        const destination = card.querySelector("h3").textContent;

        localStorage.setItem("selectedDestination", destination);

        window.location.href = "flights.html";

    });

});


// ===============================
// CARD HOVER EFFECT
// ===============================

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


// ===============================
// PAGE LOAD
// ===============================

window.onload = function () {

    console.log("Welcome to Destinations Page ✈");

};