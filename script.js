const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const container = document.querySelector('.container');

function moveNoButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const padding = 25; 

    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    const randomX = Math.floor(Math.random() * (maxX - padding)) + padding;
    const randomY = Math.floor(Math.random() * (maxY - padding)) + padding;

    const finalX = Math.max(padding, Math.min(randomX, maxX));
    const finalY = Math.max(padding, Math.min(randomY, maxY));

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${finalX}px`;
    noBtn.style.top = `${finalY}px`;
}

// Button evasion listeners
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveNoButton(); });
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', (e) => { e.preventDefault(); moveNoButton(); });

// What happens when she clicks YES
yesBtn.addEventListener('click', () => {
    // REPLACE THIS URL WITH YOUR ACTUAL FORMSPREE URL
    const formspreeUrl = "https://formspree.io/f/xvzjbvgz";

    // Smoothly transform the container to display the two scheduling boxes
    container.innerHTML = `
        <h1 class="confession-text">Yay! I knew it! 💖✨</h1>
        <p class="question">Let's plan our date!</p>
        
        <form action="${formspreeUrl}" method="POST" id="dateForm">
            <input type="hidden" name="_subject" value="Urmila accepted your date proposal!">
            
            <div class="form-box">
                <label for="dateInput">When are you free? 🗓️</label>
                <input type="datetime-local" id="dateInput" name="date_and_time" required>
            </div>

            <div class="form-box">
                <label for="placeInput">Where should we go? 📍</label>
                <input type="text" id="placeInput" name="location" placeholder="e.g., Your favorite café..." required>
            </div>

            <button type="submit" id="submitBtn">Submit Plan 🥰</button>
        </form>
    `;
});
