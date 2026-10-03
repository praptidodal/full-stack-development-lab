var form = document.getElementById("registerForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value;

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var passwordError = document.getElementById("passwordError");
    var successMessage = document.getElementById("successMessage");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    phoneError.innerHTML = "";
    passwordError.innerHTML = "";
    successMessage.innerHTML = "";

    var isValid = true;

    if (name === "") {
        nameError.innerHTML = "Name is required";
        isValid = false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.innerHTML = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.innerHTML = "Please enter a valid email";
        isValid = false;
    }

    var phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
        phoneError.innerHTML = "Phone number is required";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        phoneError.innerHTML = "Phone number must be 10 digits";
        isValid = false;
    }

    if (password === "") {
        passwordError.innerHTML = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters";
        isValid = false;
    }

    if (isValid) {
        successMessage.innerHTML = "Registration successful";
        form.reset();
    }
});
