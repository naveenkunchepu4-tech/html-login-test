document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const usernameInput = document.querySelector('#username');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = usernameInput.value;
        alert('Login successful for user: ' + username);
    });
});