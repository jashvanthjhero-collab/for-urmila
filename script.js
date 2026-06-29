const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionText = document.querySelector('.question');

// Function to move the "No" button to a random position
function moveNoButton() {
    // Calculate max available width and height inside the browser window
    const maxX = window.innerWidth - noBtn.offsetWidth - 40;
    const maxY = window.innerHeight - noBtn.offsetHeight - 40;
    
    // Generate random coordinates within boundaries
    const randomX = Math.floor(Math.random() * Math.max(maxX, 1));
    const randomY = Math.floor(Math.random() * Math.max(maxY, 1));
    
    // Teleport the button using fixed positioning
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// 1. If they try to move the mouse cursor over it (Desktop PC)
noBtn.addEventListener('mouseover', moveNoButton);

// 2. If they manage to tap it quickly or use a touchscreen phone
noBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Stop any default action
    moveNoButton();
});

// What happens when they click Yes!
yesBtn.addEventListener('click', () => {
    questionText.innerHTML = "Yay! I knew it! 💖✨";
    noBtn.style.display = 'none'; // Hide the No button permanently
    yesBtn.style.transform = 'scale(1.4)';
    yesBtn.disabled = true;
});
