// Sample vocabulary data with multiple emojis
const vocabulary = [
	{
    	emoji: ['👋', '🌞'],
    	chinese: '你好',
    	pinyin: 'nǐ hǎo',
    	english: 'hello',
    	romanian: 'salut',
    	german: 'hallo'
	},
	{
    	emoji: ['🙏'],
    	chinese: '谢谢',
    	pinyin: 'xièxie',
    	english: 'thank you',
    	romanian: 'mulțumesc',
    	german: 'danke'
	},
	// Add more vocabulary entries here
];

// Function to display vocabulary
function displayVocabulary() {
	const vocabList = document.getElementById('vocabulary-list');
	vocabulary.forEach(item => {
    	const vocabItem = document.createElement('div');
    	vocabItem.classList.add('vocab-item');

    	const emojiHTML = item.emoji.map(e => `<span class="emoji">${e}</span>`).join('');

    	vocabItem.innerHTML = `
        	<div class="vocab-content">
            	<div class="speaker-icon">🔊</div>
            	<div class="chinese">
                	${emojiHTML}
                	<span class="chinese-character">${item.chinese}</span>
                	<span class="pinyin">${item.pinyin}</span>
            	</div>
            	<div class="translations">
                	<div class="translation translation-english">${item.english}</div>
                	<div class="translation translation-romanian">${item.romanian}</div>
                	<div class="translation translation-german">${item.german}</div>
            	</div>
        	</div>
    	`;

    	vocabList.appendChild(vocabItem);
	});
}

// Call function to display the vocabulary on page load
window.onload = displayVocabulary;

// Toggle Day/Night Mode (Placeholder functionality)
document.getElementById('toggle-mode').addEventListener('click', () => {
	alert('Day/Night Mode toggle functionality to be implemented.');
});

// Save Favorites (Placeholder functionality)
document.getElementById('save-favorites').addEventListener('click', () => {
	alert('Save Favorites functionality to be implemented.');
});
