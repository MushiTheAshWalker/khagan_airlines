// =============================
// Flight Details
// =============================

// Flights Page থেকে Data Load

const from = localStorage.getItem("from") || "Dhaka";
const to = localStorage.getItem("to") || "Cox's Bazar";
const travelClass = localStorage.getItem("class") || "Economy";

// Flight Route Update

const route = document.querySelector(".right h3");

if (route) {
    route.innerHTML = `${from} → ${to}`;
}

// Continue Button

const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {

    continueBtn.addEventListener("click", function () {

        // Seat Selection Page-এ Data পাঠানো

        localStorage.setItem("selectedRoute", `${from} → ${to}`);
        localStorage.setItem("selectedClass", travelClass);

        window.location.href = "seat-selection.html";

    });

}

// =============================
// Page Loaded
// =============================

console.log("Flight Details Loaded ✈");