const form = document.getElementById('signupForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const referralCode = document.getElementById('referralCode').value;

    // Basic validation (you can add more complex validation as needed)
    if (email === '' || password === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // Send form data to backend (replace with your backend logic)
    // For example, using fetch API:
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, referralCode })
    })
    .then(response => {
        if (response.ok) {
            // Handle successful signup (e.g., redirect to welcome page)
            window.location.href = '/welcome';
        } else {
            // Handle signup failure (e.g., display error message)
            alert('Signup failed. Please check your input.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});