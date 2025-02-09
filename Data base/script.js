// Shared data (can be improved with a more robust data management solution)
let contacts = []; 

// Load contacts from local storage on page load
const storedContacts = localStorage.getItem('contacts');
if (storedContacts) {
  contacts = JSON.parse(storedContacts);
}

// Function to add a new contact
function addContact(name, email, message) {
  const newContact = {
    name: name,
    email: email,
    message: message
  };
  contacts.push(newContact);
  saveContactsToLocalStorage(); 

  // Send email to developer (replace with actual developer email)
  sendEmailToDeveloper(name, email, message); 
}

// Function to send email to developer (using a simplified example)
function sendEmailToDeveloper(name, email, message) {
  const developerEmail = 'your_developer_email@example.com'; // Replace with actual email

  // Create email body
  const emailBody = `
    New Contact Message:

    Name: ${name}
    Email: ${email}
    Message: ${message}
  `;

  // Simulate email sending (replace with actual email sending logic)
  console.log(`Sending email to: ${developerEmail}`);
  console.log(`Email Body:\n${emailBody}`);

  // You would typically use a library like EmailJS or a server-side language 
  // (like Node.js, PHP, Python) to actually send the email.
}

// Function to display contacts (for contact_list.html)
function displayContacts() {
  const contactList = document.getElementById('contactList');
  contactList.innerHTML = ""; 

  contacts.forEach(contact => {
    const contactItem = document.createElement('div');
    contactItem.innerHTML = `
      <p>Name: ${contact.name}</p>
      <p>Email: ${contact.email}</p>
      <p>Message: ${contact.message}</p>
      <hr>
    `;
    contactList.appendChild(contactItem);
  });
}

// Function to save contacts to local storage
function saveContactsToLocalStorage() {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Handle form submission (in index.html)
const contactForm = document.getElementById('contactForm');
if (contactForm) { // Check if the form exists on this page
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic input validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return; 
    }

    // Add the contact and send email
    addContact(name, email, message); 
    contactForm.reset(); 

    // Optionally, redirect to the contact list page after successful submission
    window.location.href = 'contact_list.html'; 
  });
}

// Display contacts on contact_list.html
if (document.getElementById('contactList')) { // Check if the contact list element exists
  displayContacts(); 
}