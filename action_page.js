document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('Name').value;
    const email = document.getElementById('Email').value;
    const subject = document.getElementById('Subject').value;
    const comment = document.getElementById('Comment').value;

    if (!name || !email || !subject || !comment) {
        alert('Please fill out all fields.');
        return;
    }

    emailjs.sendForm('contact_service', 'contact_form', this)
        .then(function(response) {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Failed to send email. Please try again.');
        });
});
