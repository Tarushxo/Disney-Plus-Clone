    const signupLink = document.getElementById("signup-link");
    const loginLink = document.getElementById("login-link");
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
    const loginEmailInput = document.querySelector(".email-input");
    const signupButton = document.getElementById("signup-button");
    const logo = document.getElementById("logo-img");
    const signupEmailInput = document.querySelector("#signup-form input[type='email']");
    const passwordInput = document.querySelector("#signup-form input[type='password']");
    const confirmPasswordInput = document.querySelector("#signup-form input[placeholder='Confirm Password']");


logo.addEventListener("click", () => {
    window.location.href = "index.html";
});

    signupLink.addEventListener("click", (event) => {
        event.preventDefault();

        // Hide the login form and show the signup form
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });

    loginLink.addEventListener("click", (event) => {
        event.preventDefault();

        // Hide the signup form and show the login form
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });

    loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
});// Prevent the default form submission

    document.querySelector("#continue-button").addEventListener("click", (event) => {
    event.preventDefault();

    // Check if the email is valid (you can use a more robust validation method)
    const email = loginEmailInput.value;
    console.log(email); // Log the email for debugging

    if (isValidEmail(email)) {
        // Redirect to home.html
        window.location.href = "home.html";
    } else {
        alert("Invalid email. Please enter a valid email address.");
    }
});
signupLink.addEventListener("click", (event) => {
        event.preventDefault();

        // Hide the login form and show the signup form
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });

    loginLink.addEventListener("click", (event) => {
        event.preventDefault();

        // Hide the signup form and show the login form
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Check if the email is valid (you can use a more robust validation method)
        const email = loginEmailInput.value;
        console.log(email);

        if (isValidEmail(email)) {
            // Redirect to home.html
            window.location.href = "home.html";
        } else {
            alert("Invalid email. Please enter a valid email address.");
        }
    });

    signupButton.addEventListener("click", (event) => {
    event.preventDefault();

        // Show the login form and hide the signup form
        const email = signupEmailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

    if (isValidEmail(email)) {
        if (isPasswordValid(password, confirmPassword)) {
            // Redirect to home.html or perform the signup action
            window.location.href = "home.html"; // Replace this with your desired action
        } else {
            alert("Password and Confirm Password do not match.");
        }
    } else {
        alert("Invalid email. Please enter a valid email address.");
    }
    
    // Prevent the default form submission
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();
    });
    });

    function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate password
function isPasswordValid(password, confirmPassword) {
    return password === confirmPassword;
}


