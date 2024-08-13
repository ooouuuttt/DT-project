document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const successMessage = document.createElement('div');

    // Event listeners for toggling between login and registration forms
    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });

    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    });

    // Handle registration
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        // Save email and password to localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        alert('Registration successful! You can now log in.');

        // Clear the form
        registerForm.reset();
    });

    // Handle login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Retrieve email and password from localStorage
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        // Check if entered email and password match stored data
        if (email === storedEmail && password === storedPassword) {
            // Hide the login box
            wrapper.style.display = 'none';

            // Display success message
            successMessage.textContent = 'Login successful!';
            successMessage.style.fontSize = '2em';
            successMessage.style.color = '#000000'; // Set text color to black
            successMessage.style.textAlign = 'center';
            successMessage.style.marginTop = '50px';

            // Append the success message to the body
            document.body.appendChild(successMessage);

            // Remove the message after 3 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        } else {
            alert('Invalid email or password. Please try again.');
        }

        // Clear the form
        loginForm.reset();
    });
});
