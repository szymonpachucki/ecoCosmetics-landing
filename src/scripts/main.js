/* eslint-disable no-console */
'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.querySelector('.contact__info-button');

  function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const nameFrame = document.getElementById('name');
    const emailFrame = document.getElementById('email');
    const messageFrame = document.getElementById('message');
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      // alert('It is not an e-mail!');
      emailFrame.style.border = '1px solid red';
      document.getElementById('email').value = '';
      document.getElementById('email').placeholder = 'It is not an e-mail!';

      setTimeout(() => {
        emailFrame.style.border = '';
        document.getElementById('email').placeholder = 'Email';
      }, 3000);

      valid = false;
    }

    if (name.length < 2 || name.length > 20) {
      nameFrame.style.border = '1px solid red';
      document.getElementById('name').value = '';
      // eslint-disable-next-line max-len
      document.getElementById('name').placeholder = 'Name must be between 2 and 20 letters';

      setTimeout(() => {
        nameFrame.style.border = '';
        document.getElementById('name').placeholder = 'Name';
      }, 3000);

      valid = false;
    }

    if (message.length < 5 || message.length > 90) {
      messageFrame.style.border = '1px solid red';
      document.getElementById('message').value = '';
      // eslint-disable-next-line max-len
      document.getElementById('message').placeholder = 'Message must be between 5 and 90 letters';

      setTimeout(() => {
        messageFrame.style.border = '';
        document.getElementById('message').placeholder = 'Message';
      }, 3000);

      valid = false;
    }

    if (valid) {
      // alert('Data send successfully.');
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      submitButton.style.backgroundColor = 'green';

      setTimeout(() => {
        submitButton.style.backgroundColor = '#333';
      }, 3000);

      return true;
    }
    submitButton.style.backgroundColor = 'red';

    setTimeout(() => {
      submitButton.style.backgroundColor = '#333';
    }, 3000);
  }

  submitButton.addEventListener('click', submitForm);
});
