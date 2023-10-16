document.addEventListener("DOMContentLoaded", function() {
    const signinForm = document.getElementById("signin-form");
    const registerForm = document.getElementById("register-form");

    signinForm.addEventListener("submit", function(event) {
        event.preventDefault();
    });

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
    });
});
