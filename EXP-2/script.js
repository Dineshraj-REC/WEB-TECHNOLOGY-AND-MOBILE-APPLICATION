document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let password = document.getElementById("password").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let address = document.getElementById("address").value.trim();

    let fnameError = document.getElementById("fnameError");
    let lnameError = document.getElementById("lnameError");
    let passwordError = document.getElementById("passwordError");
    let emailError = document.getElementById("emailError");
    let mobileError = document.getElementById("mobileError");
    let addressError = document.getElementById("addressError");

    fnameError.textContent = "";
    lnameError.textContent = "";
    passwordError.textContent = "";
    emailError.textContent = "";
    mobileError.textContent = "";
    addressError.textContent = "";

    let isValid = true;

    let namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(fname) || fname.length < 6) {
        fnameError.textContent = "First Name must contain only alphabets and at least 6 characters.";
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid Email (example@domain.com).";
        isValid = false;
    }

    let mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        mobileError.textContent = "Mobile number must be exactly 10 digits.";
        isValid = false;
    }

    if (lname === "") {
        lnameError.textContent = "Last Name cannot be empty.";
        isValid = false;
    }

    if (address === "") {
        addressError.textContent = "Address cannot be empty.";
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    }

});
