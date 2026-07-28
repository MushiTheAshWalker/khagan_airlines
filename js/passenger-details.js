// ==============================
// Passenger Details
// ==============================

const passengerForm = document.getElementById("passengerForm");

passengerForm.addEventListener("submit", function (e) {

    e.preventDefault();

    // Get Input Values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const passport = document.getElementById("passport").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;

    // Validation
    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        passport === "" ||
        dob === ""
    ) {

        alert("Please fill in all required fields.");

        return;

    }

    // Save Passenger Information
    localStorage.setItem("passengerName", name);
    localStorage.setItem("passengerEmail", email);
    localStorage.setItem("passengerPhone", phone);
    localStorage.setItem("passengerPassport", passport);
    localStorage.setItem("passengerDOB", dob);
    localStorage.setItem("passengerGender", gender);

    // Go to Payment Page
    window.location.href = "payment.html";

});

console.log("Passenger Details Loaded ✈");