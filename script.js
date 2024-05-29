function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting initially

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const hostelBlock = document.getElementById("hostelBlock").value;
  const events = Array.from(
    document.querySelectorAll('input[name="event"]:checked')
  ).map((checkbox) => checkbox.value);

  let isValid = true;

  // Full Name validation
  if (fullName === "") {
    alert("Please enter your full name.");
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    isValid = false;
  }

  // Phone Number validation
  const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
  if (!phonePattern.test(phoneNumber)) {
    alert("Please enter a valid phone number in the format XXX-XXX-XXXX.");
    isValid = false;
  }

  // Hostel Block validation
  if (hostelBlock === "") {
    alert("Please select a hostel block.");
    isValid = false;
  }

  // Interested Events validation
  if (events.length === 0) {
    alert("Please select at least one interested event.");
    isValid = false;
  }

  if (isValid) {
    // If all fields are valid, submit the form
    event.target.submit();
  }
}



