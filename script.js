document.addEventListener('DOMContentLoaded', function() {
    const text = document.getElementById('joke');
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            // Combine setup and punchline to show the full joke
            text.textContent = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            text.textContent = 'Failed to load joke.';
            console.error('Error fetching joke:', error);
        });
});
