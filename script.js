// Helper functions
const setError = (field, message) => {
  const container = field.parentElement;
  const error = container.querySelector(".error");
  error.textContent = message;
  container.classList.add("invalid");
};

const clearError = field => {
  const container = field.parentElement;
  const error = container.querySelector(".error");
  error.textContent = "";
  container.classList.remove("invalid");
};

const isEmail = value =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

/* Main validation */
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault(); // block normal form post

  const name = e.target.name;
  const email = e.target.email;
  const country = e.target.country;
  const message = e.target.message;

  // Track validity
  let valid = true;

  // Name (required, ≥2 chars)
  if (name.value.trim().length < 2) {
    setError(name, "Please enter at least 2 characters.");
    valid = false;
  } else {
    clearError(name);
  }

  // Email (required, pattern)
  if (!isEmail(email.value)) {
    setError(email, "Enter a valid email address.");
    valid = false;
  } else {
    clearError(email);
  }

  // Country (required)
  if (!country.value) {
    setError(country, "Select a country.");
    valid = false;
  } else {
    clearError(country);
  }

  // Message : (required, ≥10 chars)
  if (message.value.trim().length < 10) {
    setError(message, "Message should be at least 10 characters.");
    valid = false;
  } else {
    clearError(message);
  }

  
  if (valid) {
    alert(`Thanks ${name.value.trim()} ! Your message has been sent.`);
    e.target.reset();
  }
});