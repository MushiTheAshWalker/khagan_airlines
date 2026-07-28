// ==========================
// Show / Hide Password
// ==========================

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

if (togglePassword && password) {

    togglePassword.addEventListener("click", function () {

        if (password.type === "password") {

            password.type = "text";
            togglePassword.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

        } else {

            password.type = "password";
            togglePassword.innerHTML = '<i class="fa-solid fa-eye"></i>';

        }

    });

}

// ==========================
// Login Validation
// ==========================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.querySelector('input[type="email"]').value.trim();
    const pass = password.value.trim();

    if (email === "" || pass === "") {

        alert("Please fill in all fields.");
        return;

    }

    alert("Login Successful!");

    // Later, once a backend exists, redirect to dashboard:
    // window.location.href = "dashboard.html";

});