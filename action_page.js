const form = document.getElementById('contact-form');



const name = document.getElementById('Name').value;
const email = document.getElementById('Email').value;
const message = document.getElementById('Subject').value;


const comment = document.getElementById('Comment').value;
alert('worked')
if (!name || !email || !message || !comment) {
    
    return;
}
emailjs.sendForm('contact_service', 'contact_form', this);
