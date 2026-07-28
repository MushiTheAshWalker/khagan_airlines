// ======================================
// BOOKING SUMMARY
// ======================================

document.getElementById("passengerName").innerText =
    localStorage.getItem("passengerName") || "Guest";

document.getElementById("route").innerText =
    localStorage.getItem("selectedRoute") || "Dhaka → Cox's Bazar";

document.getElementById("seat").innerText =
    localStorage.getItem("seat") || "A1";

document.getElementById("travelClass").innerText =
    localStorage.getItem("selectedClass") || "Economy";


// ======================================
// PRICE
// ======================================

let total = 8500;

const travelClass =
    localStorage.getItem("selectedClass");

if (travelClass === "Business") {

    total = 14500;

}

else if (travelClass === "First Class") {

    total = 25000;

}

document.getElementById("totalFare").innerText =
`৳${total.toLocaleString()}`;


// ======================================
// PAYMENT METHOD
// ======================================

const methods =
document.querySelectorAll(".method");

const paymentFields =
document.getElementById("paymentFields");

let selectedMethod = "card";

methods.forEach(method => {

    method.addEventListener("click", () => {

        methods.forEach(item =>
            item.classList.remove("active"));

        method.classList.add("active");

        selectedMethod =
        method.dataset.method;

        loadForm(selectedMethod);

    });

});


// ======================================
// DYNAMIC FORM
// ======================================

function loadForm(method){

    switch(method){

        case "card":

            paymentFields.innerHTML=`

            <input
            type="text"
            placeholder="Card Holder Name"
            required>

            <input
            type="text"
            placeholder="Card Number"
            required>

            <input
            type="text"
            placeholder="MM / YY"
            required>

            <input
            type="password"
            placeholder="CVV"
            required>

            `;

        break;


        case "bkash":

            paymentFields.innerHTML=`

            <input
            type="text"
            placeholder="bKash Number"
            required>

            `;

        break;


        case "nagad":

            paymentFields.innerHTML=`

            <input
            type="text"
            placeholder="Nagad Number"
            required>

            `;

        break;


        case "rocket":

            paymentFields.innerHTML=`

            <input
            type="text"
            placeholder="Rocket Number"
            required>

            `;

        break;


        case "dbbl":

            paymentFields.innerHTML=`

            <input
            type="text"
            placeholder="DBBL Nexus Card Number"
            required>

            <input
            type="password"
            placeholder="PIN"
            required>

            `;

        break;


        case "onecard":

            paymentFields.innerHTML=`

            <input
            type="text"
            placeholder="Student ID"
            required>

            <input
            type="text"
            placeholder="University One Card Number"
            required>

            <input
            type="password"
            placeholder="PIN"
            required>

            `;

        break;

    }

}

loadForm("card");


// ======================================
// COUPON
// ======================================

const couponBtn =
document.getElementById("applyCoupon");

couponBtn.addEventListener("click", () => {

    const coupon =
    document.getElementById("coupon")
    .value
    .trim()
    .toUpperCase();

    if(coupon==="SKY10"){

        total = total * 0.90;

        document.getElementById("totalFare")
        .innerText=
        `৳${Math.round(total).toLocaleString()}`;

        alert("Coupon Applied Successfully!");

    }

    else{

        alert("Invalid Coupon!");

    }

});


// ======================================
// PAYMENT
// ======================================

const paymentForm =
document.getElementById("paymentForm");

paymentForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    localStorage.setItem(
        "paymentMethod",
        selectedMethod
    );

    const processing =
    document.getElementById("processing");

    processing.classList.add("show");

    setTimeout(()=>{

        processing.classList.remove("show");

        window.location.href=
        "booking-confirmation.html";

    },2000);

});


// ======================================

console.log("Payment Page Loaded 💳");