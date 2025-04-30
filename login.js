document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  // Simple validation to check if all fields are filled
  if (email && pass) {
      // Display the confirmation message
      document.getElementById("confirmationMessage").classList.remove("hidden");
      document.getElementById("registrationForm").reset();
  } else {
      alert("Please fill all fields.");
  }
});
