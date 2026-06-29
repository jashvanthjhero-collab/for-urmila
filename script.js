const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionText = document.querySelector('.question');

function moveNoButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const padding = 25; // Safe padding inside phone screens

    // Enforce calculation limits inside the viewport boundaries
    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    const randomX = Math.floor(Math.random() * (maxX - padding)) + padding;
    const randomY = Math.floor(Math.random() * (maxY - padding)) + padding;

    // Clamp values to secure it never moves off-screen
    const finalX = Math.max(padding, Math.min(randomX, maxX));
    const finalY = Math.max(padding, Math.min(randomY, maxY));

    // DYNAMIC TRANSFORMATION: Changes layout type instantly on interaction
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${finalX}px`;
    noBtn.style.top = `${finalY}px`;
}

// Triggers immediately when finger hits mobile screen
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Triggers immediately when mouse hovers over desktop screen
noBtn.addEventListener('mouseover', moveNoButton);

noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
});

yesBtn.addEventListener('click', () => {
    questionText.innerHTML = "Yay! I knew it! 💖✨";
    noBtn.style.display = 'none'; 
    yesBtn.style.transform = 'scale(1.4)';
    yesBtn.disabled = true;
});
