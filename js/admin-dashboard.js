// ======================================
// ADMIN DASHBOARD
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Khagan Airlines Admin Dashboard Loaded ✈");

});


// ======================================
// QUICK ACTION BUTTONS
// ======================================

const actionButtons = document.querySelectorAll(".action-card button");

actionButtons.forEach(button => {

    button.addEventListener("click", function () {

        const action = this.innerText;

        switch(action){

            case "Add Flight":

                alert("Add Flight feature will be available after backend integration.");

                break;

            case "Manage":

                alert("Manage Flights feature will be available after backend integration.");

                break;

            case "Users":

                alert("Manage Users feature will be available after backend integration.");

                break;

            case "Payments":

                alert("Payments feature will be available after backend integration.");

                break;

            default:

                alert("Coming Soon!");

        }

    });

});


// ======================================
// TABLE ROW HIGHLIGHT
// ======================================

const rows = document.querySelectorAll("tbody tr");

rows.forEach(row => {

    row.addEventListener("click", () => {

        rows.forEach(r => r.classList.remove("selected"));

        row.classList.add("selected");

    });

});


// ======================================
// SCROLL ANIMATION
// ======================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition="all .8s ease";

    observer.observe(section);

});