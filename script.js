const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionText = document.querySelector('.question');

// The classic "Runaway No" button logic
noBtn.addEventListener('mouseover', () => {
    // Calculate random position within the viewport width/height boundaries
    const maxX = window.innerWidth - noBtn.offsetWidth - 40;
    const maxY = window.innerHeight - noBtn.offsetHeight - 40;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    // Teleport the button out of reach
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// What happens when she finally clicks Yes
yesBtn.addEventListener('click', () => {
    questionText.innerHTML = "Yay! I knew it! 💖✨ Let's goooo!";
    noBtn.style.display = 'none';
    yesBtn.style.transform = 'scale(1.3)';
    yesBtn.disabled = true;
    
    // (Optional) Call your matrix or heart shower background animations here!
    startHeartShower(); 
});

function startHeartShower() {
    console.log("Matrix & Pinkboard canvases activated dynamically!");
    // This is where the background scripts from image.png (js/heart.js) kick in!
}