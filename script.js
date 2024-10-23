const vocabulary = [
  // Add more vocabulary entries here with or without a group
  {
    group: "Tone Practice",
    emoji: ["🟩"],
    chinese: "妈",
    pinyin: "mā",
    english: "High level tone",
    romanian: "ton înalt",
    german: "fest",
  },
  {
    group: "Tone Practice",
    emoji: ["🟦"],
    chinese: "麻",
    pinyin: "má",
    english: "Rising tone",
    romanian: "ton ascendent",
    german: "? (question-like tone)",
  },
  {
    group: "Tone Practice",
    emoji: ["🟨"],
    chinese: "马",
    pinyin: "mǎ",
    english: "Falling-rising tone",
    romanian: "ton căzut-ridicat",
    german: "deep and longer",
  },
  {
    group: "Tone Practice",
    emoji: ["🟥"],
    chinese: "骂",
    pinyin: "mà",
    english: "Falling tone",
    romanian: "ton căzut",
    german: "abrupt",
  },
  {
    group: "Greetings and Questions",
    emoji: ["👋"],
    chinese: "你好",
    pinyin: "nǐ hǎo!",
    english: "Hello",
    romanian: "Salut",
    german: "Guten Morgen, Tag, Abend...",
  },
  {
    group: "Greetings and Questions",
    emoji: ["🤔"],
    chinese: "你好吗?",
    pinyin: "nǐ hǎo ma?",
    english: "How are you?",
    romanian: "Cum ești?",
    german: "Wie geht es dir?",
  },
  {
    group: "Greetings and Questions",
    emoji: ["😊"],
    chinese: "我很好!",
    pinyin: "wǒ hěn hǎo!",
    english: "I am good!",
    romanian: "Sunt bine!",
    german: "Mir geht es gut!",
  },
  {
    group: "Greetings and Questions",
    emoji: ["🙏"],
    chinese: "谢谢",
    pinyin: "xiè xiè!",
    english: "Thank you",
    romanian: "Mulțumesc",
    german: "Danke",
  },
  {
    group: "Greetings and Questions",
    emoji: ["👋"],
    chinese: "再见",
    pinyin: "zài jiàn!",
    english: "Goodbye",
    romanian: "La revedere",
    german: "Auf Wiedersehen",
  },
  {
    group: "Personal Pronouns",
    emoji: ["🫵"],
    chinese: "你",
    pinyin: "nǐ",
    english: "You (informal)",
    romanian: "tu",
    german: "du",
  },
  {
    group: "Personal Pronouns",
    emoji: ["🫴"],
    chinese: "您",
    pinyin: "nín",
    english: "You (formal)",
    romanian: "dumneavoastră",
    german: "Sie",
  },
  {
    group: "Personal Pronouns",
    emoji: ["🫀", "👤"],
    chinese: "我",
    pinyin: "wǒ",
    english: "I",
    romanian: "eu",
    german: "ich",
  },
  {
    group: "Personal Pronouns",
    emoji: ["🧍‍♂️", "🧍‍♀️", "🐾"],
    chinese: "他/她/它",
    pinyin: "tā",
    english: "He / She / It",
    romanian: "el / ea",
    german: "er / sie / es",
  },
  {
    group: "Personal Pronouns",
    emoji: ["👥", "👨‍👩‍👧‍👦"],
    chinese: "我们",
    pinyin: "wǒ men",
    english: "We",
    romanian: "noi",
    german: "wir",
  },
  {
    group: "Personal Pronouns",
    emoji: ["👥", "👨‍👩‍👧‍👦"],
    chinese: "你们",
    pinyin: "nǐ men",
    english: "You all",
    romanian: "void",
    german: "ihr",
  },
  {
    group: "Personal Pronouns",
    emoji: ["👫", "👫", "👨‍👩‍👧‍👦"],
    chinese: "他们/她们/它们",
    pinyin: "tā men",
    english: "They",
    romanian: "ei / ele",
    german: "sie",
  },
  {
    group: "Professions",
    emoji: ["🏢", "👔"],
    chinese: "职业",
    pinyin: "zhíyè",
    english: "Profession",
    romanian: "Profesiune",
    german: "Beruf",
  },
  {
    group: "Professions",
    emoji: ["🧑‍💼", "💼"],
    chinese: "经理",
    pinyin: "jīnglǐ",
    english: "Manager",
    romanian: "Manager",
    german: "Manager",
  },
  {
    group: "Professions",
    emoji: ["🧑‍⚕️", "🧑‍🤝‍🧑"],
    chinese: "护理员",
    pinyin: "hùlǐ yuán",
    english: "Caregiver",
    romanian: "Îngrijitor",
    german: "Betreuer",
  },
  {
    group: "Professions",
    emoji: ["🧑‍🍳", "🍽️"],
    chinese: "服务员",
    pinyin: "fúwùyuán",
    english: "Waiter",
    romanian: "Chelner",
    german: "Kellner",
  },
  {
    group: "Professions",
    emoji: ["🛠️", "👷"],
    chinese: "工程师",
    pinyin: "gōngchéngshī",
    english: "Engineer",
    romanian: "Inginer",
    german: "Ingenieur",
  },
  {
    group: "Professions",
    emoji: ["💻", "🖥️"],
    chinese: "电脑工程师",
    pinyin: "diànnǎo gōngchéngshī",
    english: "Computer Engineer",
    romanian: "Inginer de calculatoare",
    german: "Computeringenieur",
  },
  {
    group: "Professions",
    emoji: ["🩺", "👨‍⚕️"],
    chinese: "医生",
    pinyin: "yīshēng",
    english: "Doctor",
    romanian: "Doctor",
    german: "Arzt",
  },
  {
    group: "Professions",
    emoji: ["🗂️", "🖊️"],
    chinese: "秘书",
    pinyin: "mìshū",
    english: "Secretary",
    romanian: "Secretar",
    german: "Sekretär",
  },
  {
    group: "Professions",
    emoji: ["🎓", "📚"],
    chinese: "学生",
    pinyin: "xuéshēng",
    english: "Student",
    romanian: "Student",
    german: "Student",
  },
  {
    group: "Professions",
    emoji: ["🛍️", "💰"],
    chinese: "售货员",
    pinyin: "shòuhuòyuán",
    english: "Salesperson",
    romanian: "Vânzător",
    german: "Verkäufer",
  },
  {
    group: "Basic Phrases",
    emoji: ["🤨"],
    chinese: "你叫什么名字?",
    pinyin: "Nǐ jiào shénme míngzì?",
    english: "What is your name?",
    romanian: "Cum te numești?",
    german: "Wie heißt du?",
  },
  {
    group: "Basic Phrases",
    emoji: ["🧑"],
    chinese: "我叫王伟",
    pinyin: "Wǒ jiào Wáng Wěi",
    english: "My name is Wang Wei.",
    romanian: "Mă numesc Wang Wei.",
    german: "Mein Name ist Wang Wei.",
  },
  {
    group: "Basic Phrases",
    emoji: ["🤵"],
    chinese: "您贵姓?",
    pinyin: "Nín guì xìng?",
    english: "What is your surname? (polite)",
    romanian: "Care este numele dumneavoastră?",
    german: "Wie ist Ihr Nachname?",
  },
  {
    group: "Basic Phrases",
    emoji: ["🏷️"],
    chinese: "我姓王",
    pinyin: "Wǒ xìng Wáng",
    english: "My surname is Wang.",
    romanian: "Mă numesc Wang.",
    german: "Mein Nachname ist Wang.",
  },
  {
    group: "Common Questions",
    emoji: ["👨‍🏫"],
    chinese: "你是老师吗?",
    pinyin: "Nǐ shì lǎoshī ma?",
    english: "Are you a teacher?",
    romanian: "Ești profesor?",
    german: "Bist du Lehrer?",
  },
  {
    group: "Common Questions",
    emoji: ["📑"],
    chinese: "不是, 我是秘书",
    pinyin: "Bù shì, wǒ shì mìshū",
    english: "No, I am a secretary.",
    romanian: "Nu, sunt secretar.",
    german: "Nein, ich bin Sekretär.",
  },
  {
    group: "Common Questions",
    emoji: ["🧐"],
    chinese: "你是学生吗?",
    pinyin: "Nǐ shì xuéshēng ma?",
    english: "Are you a student?",
    romanian: "Ești student?",
    german: "Bist du Student?",
  },
  {
    group: "Common Questions",
    emoji: ["🙅‍♂️"],
    chinese: "不是, 我不是学生",
    pinyin: "Bù shì, wǒ bù shì xuéshēng",
    english: "No, I am not a student.",
    romanian: "Nu, nu sunt student.",
    german: "Nein, ich bin kein Student.",
  },
  {
    group: "Common Questions",
    emoji: ["🤔"],
    chinese: "你叫什么?",
    pinyin: "Nǐ jiào shénme?",
    english: "What do you call yourself?",
    romanian: "Cum te numești?",
    german: "Wie heißt du?",
  },
  {
    group: "Common Questions",
    emoji: ["🧑"],
    chinese: "我叫王刚",
    pinyin: "Wǒ jiào Wáng Gāng",
    english: "My name is Wang Gang.",
    romanian: "Mă numesc Wang Gang.",
    german: "Mein Name ist Wang Gang.",
  },
  {
    group: "Common Questions",
    emoji: ["🛠️"],
    chinese: "您是工程师吗?",
    pinyin: "Nín shì gōngchéngshī ma?",
    english: "Are you an engineer?",
    romanian: "Sunteți inginer?",
    german: "Sind Sie Ingenieur?",
  },
  {
    group: "Common Questions",
    emoji: ["❌", "👨‍🏫"],
    chinese: "不是, 我不是老师",
    pinyin: "Bù, wǒ bù shì lǎoshī",
    english: "No, I am not a teacher.",
    romanian: "Nu, nu sunt profesor.",
    german: "Nein, ich bin kein Lehrer.",
  },
  {
    group: "Other Useful Vocabulary",
    emoji: ["🤷‍♂️"],
    chinese: "马马虎虎",
    pinyin: "mǎmǎ hūhū",
    english: "Not so good",
    romanian: "așa și așa",
    german: "so la la",
  },
  {
    group: "Other Useful Vocabulary",
    emoji: ["🏯"],
    chinese: "汉语",
    pinyin: "Hàn yǔ",
    english: "Mandarin",
    romanian: "Limba chineză",
    german: "Hauptsprache",
  },
  {
    group: "Other Useful Vocabulary",
    emoji: ["❣️"],
    chinese: "你爱我吗?",
    pinyin: "nǐ ài wǒ ma?",
    english: "Do you love me?",
    romanian: "Mă iubești?",
    german: "Liebst du mich?",
  },
  {
    group: "Other Useful Vocabulary",
    emoji: ["🍲"],
    chinese: "我饿",
    pinyin: "wǒ è",
    english: "I am hungry",
    romanian: "Sunt înfometat",
    german: "Ich bin hungrig",
  },
  {
    group: "Other Useful Vocabulary",
    emoji: ["💻"],
    chinese: "你也忙吗?",
    pinyin: "nǐ yě máng ma?",
    english: "Are you also busy?",
    romanian: "Ești și tu ocupat?",
    german: "Bist du auch beschäftigt?",
  },
  {
    group: "Characters and Radicals",
    emoji: ["🐣"],
    chinese: "小",
    pinyin: "xiǎo",
    english: "Small",
    romanian: "Mic",
    german: "Herzradikal",
  },
  {
    group: "Characters and Radicals",
    emoji: ["👁️"],
    chinese: "目",
    pinyin: "mù",
    english: "Eye",
    romanian: "Ochi",
    german: "Auge",
  },
  {
    group: "Characters and Radicals",
    emoji: ["👨"],
    chinese: "男",
    pinyin: "nán",
    english: "Male",
    romanian: "Bărbat",
    german: "Mann",
  },
  {
    group: "Characters and Radicals",
    emoji: ["👩"],
    chinese: "女",
    pinyin: "nǚ",
    english: "Female",
    romanian: "Femeie",
    german: "Frau",
  },
  {
    group: "Adjectives and Particles",
    emoji: ["🌟"],
    chinese: "很",
    pinyin: "hěn",
    english: "Very",
    romanian: "foarte",
    german: "sehr",
  },
  {
    group: "Adjectives and Particles",
    emoji: ["➕"],
    chinese: "也",
    pinyin: "yě",
    english: "Also",
    romanian: "de asemenea",
    german: "auch",
  },
  {
    group: "Adjectives and Particles",
    emoji: ["❓"],
    chinese: "吗",
    pinyin: "ma",
    english: "Question particle",
    romanian: "particulă de întrebare",
    german: "Fragepartikel",
  },
  {
    group: "Adjectives and Particles",
    emoji: ["🔄"],
    chinese: "呢",
    pinyin: "ne",
    english: "Question particle for follow-up questions",
    romanian: "particulă de întrebare",
    german: "Fragepartikel",
  },
  {
    group: "Emotions and States",
    emoji: ["😫"],
    chinese: "累",
    pinyin: "lěi",
    english: "Tired",
    romanian: "obosit",
    german: "müde",
  },
  {
    group: "Emotions and States",
    emoji: ["📆"],
    chinese: "忙",
    pinyin: "máng",
    english: "Busy",
    romanian: "ocupat",
    german: "beschäftigt",
  },
  {
    group: "Emotions and States",
    emoji: ["🍲"],
    chinese: "饿",
    pinyin: "è",
    english: "Hungry",
    romanian: "înfometat",
    german: "hungrig",
  },
  {
    group: "Emotions and States",
    emoji: ["💦"],
    chinese: "渴",
    pinyin: "kě",
    english: "Thirsty",
    romanian: "însetat",
    german: "durstig",
  },
  {
    group: "Common Actions",
    emoji: ["❤️"],
    chinese: "爱",
    pinyin: "ài",
    english: "To love",
    romanian: "a iubi",
    german: "lieben",
  },
  {
    group: "Common Actions",
    emoji: ["👍"],
    chinese: "是",
    pinyin: "shì",
    english: "Yes / To be",
    romanian: "da",
    german: "sein",
  },
  {
    group: "Common Actions",
    emoji: ["👎"],
    chinese: "不",
    pinyin: "bù",
    english: "No",
    romanian: "nu",
    german: "nein",
  },
  {
    group: "Common Actions",
    emoji: ["💧"],
    chinese: "水",
    pinyin: "shuǐ",
    english: "Water",
    romanian: "apă",
    german: "Wasser",
  },
  {
    group: "Common Actions",
    emoji: ["📖"],
    chinese: "中文",
    pinyin: "zhōng wén",
    english: "Chinese language",
    romanian: "limba chineză",
    german: "Chinesische Sprache",
  },
  // Add more vocabulary entries here
];

function displayVocabulary() {
  const vocabList = document.getElementById("vocabulary-list");
  const groups = {};

  // Group vocabulary items
  vocabulary.forEach((item) => {
    const group = item.group || "Ungrouped";
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(item);
  });

  // Display grouped vocabulary
  Object.keys(groups).forEach((groupName) => {
    // Create a section for each group
    const groupSection = document.createElement("div");
    groupSection.classList.add("group-section");

    const groupHeader = document.createElement("h2");
    groupHeader.classList.add("group-header");
    groupHeader.textContent = groupName;

    // Add toggle functionality to the header
    groupHeader.addEventListener("click", () => {
      const vocabItems = groupSection.querySelectorAll(".vocab-item");
      vocabItems.forEach((item) => {
        item.classList.toggle("hidden");
      });
    });

    groupSection.appendChild(groupHeader);

    groups[groupName].forEach((item) => {
      const vocabItem = document.createElement("div");
      vocabItem.classList.add("vocab-item");

      const emojiHTML = item.emoji
        .map((e) => `<span class="emoji">${e}</span>`)
        .join("");

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
