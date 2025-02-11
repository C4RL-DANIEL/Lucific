document.addEventListener('DOMContentLoaded', () => {
  let contacts = [];

  const storedContacts = localStorage.getItem('contacts');
  if (storedContacts) {
      contacts = JSON.parse(storedContacts);
  }

  function displayContacts() {
      const contactList = document.getElementById('contactList');
      if (!contactList) {
          console.error("contactList element not found!");
          return;
      }

      contactList.innerHTML = "";

      const sharedDataMessage = document.createElement('p');
      sharedDataMessage.textContent = "Shared data (can be improved with a more robust data management solution)";
      sharedDataMessage.classList.add('shared-data-message');
      contactList.appendChild(sharedDataMessage);

      contacts.forEach(contact => {
          const contactItem = document.createElement('div');
          contactItem.classList.add('contact-item');
          contactItem.innerHTML = `
              <p>Name: ${contact.name}</p>
              <p>Email: ${contact.email}</p>
              <p>Message: ${contact.message}</p>
          `;
          contactList.appendChild(contactItem);
      });
  }

  displayContacts(); // Call displayContacts() ONCE on page load

  function addContact(name, email, message) {
      const newContact = {
          name: name,
          email: email,
          message: message
      };
      contacts.push(newContact);
      saveContactsToLocalStorage();
      sendEmailToDeveloper(name, email, message);
  }

  function sendEmailToDeveloper(name, email, message) {
      const developerEmail = 'c4rl.daniel@gmail.com';

      const emailBody = `
          New Contact Message:

          Name: ${name}
          Email: ${email}
          Message: ${message}
      `;

      console.log(`Sending email to: ${developerEmail}`);
      console.log(`Email Body:\n${emailBody}`);
  }

  function saveContactsToLocalStorage() {
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', (event) => {
          event.preventDefault();

          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;

          if (!name || !email || !message) {
              alert("Please fill in all fields.");
              return;
          }

          addContact(name, email, message);
          contactForm.reset();
          window.location.href = 'contact_list.html';
      });
  }
}); // End of the SINGLE DOMContentLoaded event listener



