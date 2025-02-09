const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Create a contact object
  const newContact = {
    name: name,
    email: email,
    message: message
  };

  // Add the new contact to the database
  database.data.contacts.push(newContact);

  // Save the updated data to local storage
  database.saveToStorage();

  // Clear the form inputs
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  // Display the updated contacts
  displayContacts();

  // Optionally, provide feedback to the user
  alert('Your message has been sent!'); 
});