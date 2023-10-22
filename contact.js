const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate form input
  if (!nameInput.value.trim()) {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }

  if (!messageInput.value.trim()) {
    alert('Please enter a message.');
    messageInput.focus();
    return;
  }

  // Submit form data
  const formData = new FormData(contactForm);
  fetch('https://example.com/contact', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      alert('Message sent successfully!');
      contactForm.reset();
    })
    .catch((error) => {
      console.error('There was a problem submitting the form:', error);
      alert('There was a problem submitting the form. Please try again later.');
    });
});

function validateEmail(email) {
  // Use regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
