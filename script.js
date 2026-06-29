const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionText = document.querySelector('.question');

// Function to safely move the button within viewable boundaries
function moveNoButton() {
    // Get button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Define a safe padding from the screen edges (in pixels)
    const padding = 20;

    // Calculate maximum safe coordinates (restricting to visible screen)
    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    // Generate random coordinates starting at least from the padding offset
    // Math.max ensures values never drop below the minimum padding bounds
    const randomX = Math.floor(Math.random() * (maxX - padding)) + padding;
    const randomY = Math.floor(Math.random() * (maxY - padding)) + padding;

    // Clamp coordinates to make absolutely sure it never leaves the screen
    const finalX = Math.max(padding, Math.min(randomX, maxX));
    const finalY = Math.max(padding, Math.min(randomY, maxY));

    // Instantly teleport the button using fixed positioning
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${finalX}px`;
    noBtn.style.top = `${finalY}px`;
}

/* MOBILE PHONE FIX: 'touchstart' triggers the instant a finger hits the screen, 
   moving the button before the mobile browser can register a click/tap event. */
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents phone zoom/double-tap bugs
    moveNoButton();
});

/* DESKTOP FIX: Moves the button as soon as the mouse cursor hovers near it */
noBtn.addEventListener('mouseover', moveNoButton);

// Final fallback if they somehow bypass the listeners
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
});

// What happens when they click Yes!
yesBtn.addEventListener('click', () => {
    questionText.innerHTML = "Yay! I knew it! 💖✨";
    noBtn.style.display = 'none'; 
    yesBtn.style.transform = 'scale(1.4)';
    yesBtn.disabled = true;
});
