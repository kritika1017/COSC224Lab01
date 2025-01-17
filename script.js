
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

   //error message
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(msg => msg.remove());

  
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const genderElements = document.getElementsByName("gender");
    const password = document.getElementById("password").value.trim();

    let genderSelected = false;
    for (const gender of genderElements) {
        if (gender.checked) {
            genderSelected = true;
            break;
        }
    }

    //validations 
    let formIsValid = true;

    if (!fullname) {
        showErrorMessage("fullname", "Full Name is required.");
        formIsValid = false;
    }

    if (!email) {
        showErrorMessage("email", "Email is required.");
        formIsValid = false;
    }

    if (!address) {
        showErrorMessage("address", "Address is required.");
        formIsValid = false;
    }

    if (!genderSelected) {
        showErrorMessage("gender", "Please select a gender.");
        formIsValid = false;
    }

    if (!password) {
        showErrorMessage("password", "Password is required.");
        formIsValid = false;
    } else if (password.length < 6) {
        showErrorMessage("password", "Password must be at least 6 characters.");
        formIsValid = false;
    } else if (!/[0-9]/.test(password)) {
        showErrorMessage("password", "Password must contain at least one number.");
        formIsValid = false;
    } else if (!/[A-Za-z]/.test(password)) {
        showErrorMessage("password", "Password must contain at least one letter (upper or lower case).");
        formIsValid = false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        showErrorMessage("password", "Password must contain at least one special character (e.g., @, #, $, etc.).");
        formIsValid = false;
    }

    //  form submission
    if (formIsValid) {
        alert("Form submitted successfully!");
         event.target.submit();  
    }
});


function showErrorMessage(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorMessage = document.createElement("span");
    errorMessage.classList.add("error-message");
    errorMessage.style.color = "red";
    errorMessage.textContent = message;

    field.insertAdjacentElement("afterend", errorMessage);
}