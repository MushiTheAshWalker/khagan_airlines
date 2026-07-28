const form = document.getElementById("registerForm");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");

if (togglePassword) {

    togglePassword.addEventListener("click", () => {

        if (password.type === "password") {

            password.type = "text";

            togglePassword.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

        } else {

            password.type = "password";

            togglePassword.innerHTML = '<i class="fa-solid fa-eye"></i>';

        }

    });

}

form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (password.value !== confirmPassword.value) {

        alert("Passwords do not match!");

        return;

    }

    alert("Registration Successful!");

    window.location.href = "login.html";

});