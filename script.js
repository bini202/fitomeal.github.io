document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("login-button");
    loginButton.addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
    window.location.href = "success.html"; // Redirect to success page
    } else {
    alert("Invalid username or password. Please try again.");
    }
    });
    });