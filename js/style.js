// Get the form element
const contactForm = document.getElementById("contactForm");

// Add event listener for form submission
contactForm.addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get all form values using document.getElementById()
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const birthdate = document.getElementById("birthdate").value;
  const favoriteNumber = document.getElementById("favoriteNumber").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Console.log all the form values
  console.log("Form submitted with the following values:");
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Birthdate:", birthdate);
  console.log("Favorite Number:", favoriteNumber);
  console.log("Phone Number:", phoneNumber);
  console.log("Email:", email);
  console.log("Message:", message);

  // Optional: Show an alert to confirm submission
  alert("Form submitted! Check the console for the values.");
});

// The reset button will work automatically with the HTML reset type
// No additional JavaScript needed for the reset functionality
