function generateMeme() {
    fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => {
            const memes = data.data.memes;
            const randomIndex = Math.floor(Math.random() * memes.length);
            const memeImage = document.getElementById('memeImage');
            memeImage.src = memes[randomIndex].url;
            animateMeme();
        })
        .catch(error => {
            console.log('Error fetching memes:', error);
            displayError();
        });
}

function changeBackground() {
    const colors = ["#FF00FF", "#00FFFF", "#FFFF00", "#FF0000", "#00FF00", "#0000FF", "#FFA500"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function resetMeme() {
    const memeImage = document.getElementById('memeImage');
    memeImage.src = "https://i.imgflip.com/1bij.jpg";
    resetBackground();
    displayResetMessage();
}

function animateMeme() {
    const memeImage = document.getElementById('memeImage');
    memeImage.style.opacity = 0;
    let opacity = 0;
    const interval = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(interval);
        } else {
            opacity += 0.1;
            memeImage.style.opacity = opacity;
        }
    }, 50);
}

function resetBackground() {
    document.body.style.backgroundColor = '#f0f0f0';
}

function displayResetMessage() {
    const footer = document.querySelector('footer');
    footer.innerHTML = "<p>Reset to default meme and background.</p>";
    setTimeout(() => {
        footer.innerHTML = "<p>© 1999 Meme-O-Matic Inc. All Rights Reserved.</p>";
    }, 3000);
}

function displayError() {
    const memeContainer = document.querySelector('.meme-container');
    memeContainer.innerHTML = "<p>Sorry, we couldn't load a meme. Try again later!</p>";
}
