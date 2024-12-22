// Массив слов на английском и их переводов
const words = [
{ english: "cat", translation: "кот" },
{ english: "dog", translation: "собака" },
{ english: "elephant", translation: "слон" },
{ english: "tiger", translation: "тигр" },
{ english: "lion", translation: "лев" },
{ english: "bear", translation: "медведь" },
{ english: "wolf", translation: "волк" },
{ english: "fox", translation: "лис" },
{ english: "rabbit", translation: "кролик" },
{ english: "mouse", translation: "мышь" },
{ english: "rat", translation: "крыса" },
{ english: "deer", translation: "олень" },
{ english: "horse", translation: "лошадь" },
{ english: "zebra", translation: "зебра" },
{ english: "giraffe", translation: "жирафа" },
{ english: "kangaroo", translation: "кенгуру" },
{ english: "panda", translation: "панда" },
{ english: "whale", translation: "кит" },
{ english: "dolphin", translation: "дельфин" },
{ english: "shark", translation: "акула" },
{ english: "octopus", translation: "окунь" },
{ english: "crab", translation: "краб" },
{ english: "seahorse", translation: "морской конек" },
{ english: "sparrow", translation: "воробей" },
{ english: "eagle", translation: "орел" },
{ english: "owl", translation: "сова" },
{ english: "parrot", translation: "попугай" },
{ english: "hen", translation: "курица" },
{ english: "rooster", translation: "петух" },
{ english: "sheep", translation: "овца" },
{ english: "goat", translation: "коза" },
{ english: "pig", translation: "свинья" },
{ english: "chicken", translation: "цыпленок" },
{ english: "turkey", translation: "индюк" },
{ english: "ferret", translation: "феррет" },
{ english: "hamster", translation: "хомяк" },
{ english: "guinea pig", translation: "морская свинка" },
{ english: "snake", translation: "змея" },
{ english: "lizard", translation: "ящерица" },
{ english: "turtle", translation: "черепаха" },
{ english: "frog", translation: "лягушка" },
{ english: "toad", translation: "жаба" },
{ english: "bat", translation: "летучая мышь" },
{ english: "ant", translation: "муравей" },
{ english: "bee", translation: "пчела" },
{ english: "butterfly", translation: "бабочка" },
{ english: "ladybug", translation: "божья коровка" },
{ english: "dragonfly", translation: "стрекоза" },
{ english: "cockroach", translation: "таракан" },
{ english: "grasshopper", translation: "кукушка" }
];

let currentIndex = 0;
let isFlipping = false; // Флаг, который блокирует клик во время переворота

// Отображение текущего слова (только английского)
function showWord() {
    if (words.length === 0) return;
    const front = document.getElementById('front');
    const back = document.getElementById('back');

    const word = words[currentIndex];
    front.textContent = word.english;
    back.textContent = ''; // Очистка перевода перед началом анимации

    // Сброс переворота карты
    document.getElementById('card').classList.remove('flip');
}

// Показ перевода после завершения анимации переворота
function showTranslation() {
    const back = document.getElementById('back');
    back.textContent = words[currentIndex].translation;
}

// Функция для обработки клика и перехода к следующему слову
document.getElementById('card').onclick = () => {
    if (isFlipping) return; // Блокируем повторный клик
        isFlipping = true;
    const card = document.getElementById('card');

    // Переворот карты
    card.classList.add('flip');

    // Показ перевода только после завершения поворота
    setTimeout(showTranslation, 300); // Показ перевода на полпути переворота

    // Через 2 секунды сменить слово
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        showWord();
        isFlipping = false; // Разблокируем клик после смены слова
    }, 2000);
};

// Запуск отображения первого слова
showWord();