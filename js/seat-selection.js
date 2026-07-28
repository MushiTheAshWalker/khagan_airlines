// ==============================
// Load Flight Route
// ==============================

const route = localStorage.getItem("selectedRoute");

if (route) {

    document.getElementById("route").innerText = route;

}

// ==============================
// Seat Selection
// ==============================

const seats = document.querySelectorAll(".seat:not(.occupied)");
const selectedSeat = document.getElementById("selectedSeat");

let currentSeat = null;

seats.forEach(seat => {

    seat.addEventListener("click", function () {

        // আগের Selected Seat Remove
        if (currentSeat) {

            currentSeat.classList.remove("selected");

        }

        // নতুন Seat Select
        this.classList.add("selected");

        currentSeat = this;

        // নিচে Seat Number Show
        selectedSeat.innerText = this.innerText;

        // Save
        localStorage.setItem("seat", this.innerText);

    });

});

// ==============================
// Continue Button
// ==============================

const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", function () {

    if (currentSeat == null) {

        alert("Please select a seat first.");

        return;

    }

    window.location.href = "passenger-details.html";

});

// ==============================
// Console
// ==============================

console.log("Seat Selection Loaded ✈");