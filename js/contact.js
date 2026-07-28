// ===============================
// CONTACT PAGE
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Khagan Airlines Contact Page Loaded ✈");

});


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const subject = document.getElementById("subject").value.trim();

        const message = document.getElementById("message").value.trim();


        if(name==="" || email==="" || phone==="" || subject==="" || message===""){

            alert("Please fill in all fields.");

            return;

        }


        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(email)){

            alert("Please enter a valid email address.");

            return;

        }


        alert("✅ Thank you! Your message has been sent successfully.");

        contactForm.reset();

    });

}