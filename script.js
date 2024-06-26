document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
