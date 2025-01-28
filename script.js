// Element selectors
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const loginPage = document.getElementById('loginPage');
const romanticPage = document.getElementById('romanticPage');
const errorMessage = document.getElementById('error');
const wordsContainer = document.getElementById('wordsContainer');

const romanticWords = [
    "I love you beyond words.",
    "You are my greatest treasure.",
    "With you, every day is paradise.",
    "Your smile lights up my soul.",
    "You are my forever and always.",
    "Together, we are unstoppable.",
    "You complete me in every way.",
    "My love for you knows no bounds.",
    "Every moment with you is magic.",
    "In your eyes, I find home."
];

// Handle login event
loginButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "Regina" && password === "260409") {
        loginPage.style.display = "none";
        romanticPage.style.display = "block";
        displayRomanticWords();
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});

// Function to display animated romantic words
function displayRomanticWords() {
    romanticWords.forEach((word, index) => {
        setTimeout(() => {
            const wordElement = document.createElement('div');
            wordElement.textContent = word;
            wordElement.className = 'animated-word';
            wordsContainer.appendChild(wordElement);

            // Remove word after 3 seconds
            setTimeout(() => {
                wordElement.remove();
            }, 3000);
        }, index * 1000);
    });
}