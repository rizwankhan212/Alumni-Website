document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const confirmationMessage = document.getElementById("confirmationMessage");

  form.addEventListener("submit", function (event) {
    // Prevent form submission if validation fails
    event.preventDefault();

    // Get all input fields and check for errors
    let isValid = true;

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const phone = document.getElementById("phone");
    const yearOfPassing = document.getElementById("year-of-passing");
    const birthDate = document.getElementById("birth-date");
    const profession = document.getElementById("profession");
    const streetAddress = document.getElementById("street-address");
    const city = document.getElementById("city");
    const region = document.getElementById("region");
    const postalCode = document.getElementById("postal-code");
    const afterInstitution = document.getElementById("after-institution");
    const fondestMemories = document.getElementById("fondest-memories");

    // Clear previous error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((message) => message.remove());

    // Validate required fields
    if (!firstName.value.trim()) {
      showError(firstName, "First Name is required.");
      isValid = false;
    }

    if (!lastName.value.trim()) {
      showError(lastName, "Last Name is required.");
      isValid = false;
    }

    if (!phone.value.trim()) {
      showError(phone, "Phone number is required.");
      isValid = false;
    } else if (!/\d{3} \d{3} \d{4}/.test(phone.value)) {
      showError(phone, "Phone number must be in format ### ### ####.");
      isValid = false;
    }

    if (!yearOfPassing.value.trim()) {
      showError(yearOfPassing, "Year of Passing is required.");
      isValid = false;
    }

    if (!birthDate.value.trim()) {
      showError(birthDate, "Birth Date is required.");
      isValid = false;
    }

    if (!profession.value.trim()) {
      showError(profession, "Profession is required.");
      isValid = false;
    }

    if (!streetAddress.value.trim()) {
      showError(streetAddress, "Street Address is required.");
      isValid = false;
    }

    if (!city.value.trim()) {
      showError(city, "City is required.");
      isValid = false;
    }

    if (!region.value.trim()) {
      showError(region, "Region is required.");
      isValid = false;
    }

    if (!postalCode.value.trim()) {
      showError(postalCode, "Postal/Zip Code is required.");
      isValid = false;
    }

    if (!afterInstitution.value.trim()) {
      showError(afterInstitution, "Please tell us where life took you after [Institution Name].");
      isValid = false;
    }

    if (!fondestMemories.value.trim()) {
      showError(fondestMemories, "Please share your fondest memories of life at [Institution Name].");
      isValid = false;
    }

    // If form is valid, display confirmation message
    if (isValid) {
      // Hide form and show confirmation message
      form.style.display = "none";
      confirmationMessage.classList.remove("hidden");

      // Optionally, submit the form via AJAX or other methods.
      // form.submit(); // Uncomment to submit the form to the server
    }
  });

  // Function to display error messages next to form elements
  function showError(element, message) {
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;

    element.parentNode.appendChild(errorMessage);
  }
});
document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission to simulate success

  // Show the confirmation message
  document.getElementById('confirmationMessage').classList.remove('hidden');
  
  // After 3 seconds, redirect to the main page
  setTimeout(function() {
      window.location.href = 'index.html'; // Redirect to the main page (index.html)
  }, 1500); // 3000 milliseconds = 3 seconds
});