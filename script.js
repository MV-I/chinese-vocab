const vocabulary = [
	{
	  group: 'Greetings',
	  emoji: ['👋', '🌞'],
	  chinese: '你好',
	  pinyin: 'nǐ hǎo',
	  english: 'hello',
	  romanian: 'salut',
	  german: 'hallo'
	},
	{
	  group: 'Thanks',
	  emoji: ['🙏'],
	  chinese: '谢谢',
	  pinyin: 'xièxie',
	  english: 'thank you',
	  romanian: 'mulțumesc',
	  german: 'danke'
	},
	// Add more vocabulary entries here with or without a group
	{
	  // No group property means this item will go to the "Ungrouped" section
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
  
  function displayVocabulary() {
	const vocabList = document.getElementById('vocabulary-list');
	const groups = {};
  
	// Group vocabulary items
	vocabulary.forEach(item => {
	  const group = item.group || 'Ungrouped';
	  if (!groups[group]) {
		groups[group] = [];
	  }
	  groups[group].push(item);
	});
  
	// Display grouped vocabulary
	Object.keys(groups).forEach(groupName => {
	  // Create a section for each group
	  const groupSection = document.createElement('div');
	  groupSection.classList.add('group-section');
  
	  const groupHeader = document.createElement('h2');
	  groupHeader.classList.add('group-header');
	  groupHeader.textContent = groupName;
  
	  // Add toggle functionality to the header
	  groupHeader.addEventListener('click', () => {
		const vocabItems = groupSection.querySelectorAll('.vocab-item');
		vocabItems.forEach(item => {
		  item.classList.toggle('hidden');
		});
	  });
  
	  groupSection.appendChild(groupHeader);
  
	  groups[groupName].forEach(item => {
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
		groupSection.appendChild(vocabItem);
	  });
  
	  vocabList.appendChild(groupSection);
	});
  }
  
  // Call function to display the vocabulary on page load
  window.onload = displayVocabulary;
  