function FormValidation() {
    var fullname = document.getElementById("fullname").value;
    if (fullname === "") {
        alert("Please enter your fullname");
        return false;
    }
    console.log("Fullname: " + fullname);

    var password = document.getElementById("password").value;
    if (password === "") {
        alert("Please enter a password (minimum 6 characters)");
        return false;
    }else if(password.length < 6) {
        alert("Password must be 6 characters or more");
        return false;
    }

    var email = document.getElementById("email").value;
    if (email === "") {
        alert("Please enter your email");
        return false;
    } else if (!validateEmail(email)) {
        alert("Invalid email format!!!");
        return false;
    }
    console.log("Email: " + email);

    var phone = document.getElementById("phone").value;
    if (phone !== "" && !validatePhone(phone)) {
        alert("Invalid phone number format!!!");
        return false;
    }
    console.log("Phone Number: " + phone);

    var genderMale = document.getElementById("male").checked;
    var genderFemale = document.getElementById("female").checked;
    if (!genderMale && !genderFemale) {
        alert("Choose a gender!");
        return false;
    }
    console.log("Gender: " + (genderMale ? "Male" : "Female"));

    var terms = document.getElementById("terms").checked;
    if (!terms) {
        alert("You must agree to the terms");
        return false;
    }
    console.log("Agreement Terms: " + terms);

    alert("Register successfully :D");
    return false;
}

function validateEmail(email) {
  var emailParts = email.split("@");
    if (emailParts.length !== 2 || emailParts[0].trim() === "" || emailParts[1].trim() === "") {
        return false;
    }
    return true;
}

function validatePhone(phone) {
  var phoneParts = phone.split("-");
    for (var i = 0; i < phoneParts.length; i++) {
        if (isNaN(phoneParts[i])) {
        return false;
        }
    }
    return true;
}
