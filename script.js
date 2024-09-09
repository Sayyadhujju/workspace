// Example JavaScript for future interactions

// Placeholder for like button functionality
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
            button.textContent = button.classList.contains('liked') ? '❤️ Liked' : '❤️';
        });
    });
});
