// List of emojis and their names
const emojis = [
    { emoji: '😊', name: 'smiley' },
    { emoji: '🎉', name: 'party' },
    { emoji: '🚀', name: 'rocket' },
    { emoji: '🍎', name: 'apple' },
    { emoji: '🏆', name: 'trophy' }
];

// Randomly select an emoji 
let currentEmoji = emojis[Math.floor(Math.random() * emojis.length)];

function checkGuess() {
    const guessInput = document.getElementById('guess');
    const result = document.getElementById('result');
    const guess = guessInput.value.trim().toLowerCase();

    if (guess === currentEmoji.name) {
        result.textContent = 'Correct! 🎉';
    } else {
        result.textContent = 'Wrong! Try again.';
    }

    // Optionally, choose a new emoji for the next round
    currentEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    document.getElementById('emoji').textContent = currentEmoji.emoji;

    // Clear the input field
    guessInput.value = '';
}
