// ======================================
// BOOKING CONFIRMATION
// ======================================

// Passenger Name
document.getElementById("passengerName").innerText =
localStorage.getItem("passengerName") || "Guest";

// Route
document.getElementById("route").innerText =
localStorage.getItem("selectedRoute") || "Dhaka → Cox's Bazar";

// Seat
document.getElementById("seat").innerText =
localStorage.getItem("seat") || "A1";

// Travel Class
document.getElementById("travelClass").innerText =
localStorage.getItem("selectedClass") || "Economy";


// ======================================
// PAYMENT METHOD
// ======================================

let paymentMethod =
localStorage.getItem("paymentMethod") || "card";

switch(paymentMethod){

    case "card":
        paymentMethod = "Credit / Debit Card";
        break;

    case "bkash":
        paymentMethod = "bKash";
        break;

    case "nagad":
        paymentMethod = "Nagad";
        break;

    case "rocket":
        paymentMethod = "Rocket";
        break;

    case "dbbl":
        paymentMethod = "DBBL Nexus";
        break;

    case "onecard":
        paymentMethod = "University One Card";
        break;

}

document.getElementById("paymentMethod").innerText =
paymentMethod;


// ======================================
// BOOKING ID
// ======================================

const bookingID =
"KH" +
new Date().getFullYear() +
Math.floor(100000 + Math.random() * 900000);

document.getElementById("bookingId").innerText =
bookingID;


// Save Booking ID

localStorage.setItem("bookingID", bookingID);


// ======================================
// DOWNLOAD TICKET
// ======================================

const downloadBtn =
document.getElementById("downloadBtn");

downloadBtn.addEventListener("click",()=>{

    alert("Your ticket is ready.\nUse Print → Save as PDF to download.");

    window.print();

});


// ======================================
// SUCCESS MESSAGE
// ======================================

setTimeout(()=>{

    console.log("Booking Confirmed ✔");

},1000);


// ======================================
// OPTIONAL
// Clear Temporary Booking Data
// ======================================

// Uncomment these after testing

/*
localStorage.removeItem("seat");
localStorage.removeItem("selectedRoute");
localStorage.removeItem("selectedClass");
localStorage.removeItem("paymentMethod");
*/


console.log("Khagan Airlines Booking Confirmation Loaded ✈");