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
	{
        emoji: ['🏢', '👔'],
        chinese: '职业',
        pinyin: 'zhíyè',
        english: 'Profession',
        romanian: 'Profesiune',
        german: 'Beruf'
    },
    {
        emoji: ['🧑‍💼', '💼'],
        chinese: '经理',
        pinyin: 'jīnglǐ',
        english: 'Manager',
        romanian: 'Manager',
        german: 'Manager'
    },
    {
        emoji: ['🧑‍⚕️', '🧑‍🤝‍🧑'],
        chinese: '护理员',
        pinyin: 'hùlǐ yuán',
        english: 'Caregiver',
        romanian: 'Îngrijitor',
        german: 'Betreuer'
    },
    {
        emoji: ['🧑‍🍳', '🍽️'],
        chinese: '服务员',
        pinyin: 'fúwùyuán',
        english: 'Waiter',
        romanian: 'Chelner',
        german: 'Kellner'
    },
    {
        emoji: ['🛠️', '👷'],
        chinese: '工程师',
        pinyin: 'gōngchéngshī',
        english: 'Engineer',
        romanian: 'Inginer',
        german: 'Ingenieur'
    },
    {
        emoji: ['💻', '🖥️'],
        chinese: '电脑工程师',
        pinyin: 'diànnǎo gōngchéngshī',
        english: 'Computer Engineer',
        romanian: 'Inginer de calculatoare',
        german: 'Computeringenieur'
    },
    {
        emoji: ['🩺', '👨‍⚕️'],
        chinese: '医生',
        pinyin: 'yīshēng',
        english: 'Doctor',
        romanian: 'Doctor',
        german: 'Arzt'
    },
    {
        emoji: ['🗂️', '🖊️'],
        chinese: '秘书',
        pinyin: 'mìshū',
        english: 'Secretary',
        romanian: 'Secretar',
        german: 'Sekretär'
    },
    {
        emoji: ['🎓', '📚'],
        chinese: '学生',
        pinyin: 'xuéshēng',
        english: 'Student',
        romanian: 'Student',
        german: 'Student'
    },
    {
        emoji: ['🛍️', '💰'],
        chinese: '售货员',
        pinyin: 'shòuhuòyuán',
        english: 'Salesperson',
        romanian: 'Vânzător',
        german: 'Verkäufer'
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
