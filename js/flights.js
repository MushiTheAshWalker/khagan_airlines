// =============================
// Flight Search Summary
// =============================

const from = localStorage.getItem("from") || "N/A";
const to = localStorage.getItem("to") || "N/A";
const date = localStorage.getItem("date") || "Any date";
const travelClass = localStorage.getItem("class") || "Economy";

document.getElementById("tripInfo").innerHTML =
`${from} <i class="fa-solid fa-arrow-right"></i> ${to}
 | ${date}
 | ${travelClass}`;


// =============================
// View Details
// =============================

const buttons = document.querySelectorAll(".flight-right button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        window.location.href = "flight-details.html";

    });

});
const destination = localStorage.getItem("selectedDestination");

if(destination){

    const toInput = document.getElementById("to");

    if(toInput){

        toInput.value = destination;

    }

}