// Массив слов на английском и их переводов
const words = [
{ english: "sparrow", translation: "воробей" },
{ english: "eagle", translation: "орел" },
{ english: "sparrowhawk", translation: "первый" },
{ english: "owl", translation: "сова" },
{ english: "parrot", translation: "попугай" },
{ english: "pigeon", translation: "голубь" },
{ english: "sparrow", translation: "воробей" },
{ english: "penguin", translation: "пингвин" },
{ english: "flamingo", translation: "фламинго" },
{ english: "hummingbird", translation: "колибри" },
{ english: "peacock", translation: "павлин" },
{ english: "canary", translation: "канарейка" },
{ english: "seagull", translation: "чайка" },
{ english: "woodpecker", translation: "дятел" },
{ english: "rooster", translation: "петух" },
{ english: "swallow", translation: "ласточка" },
{ english: "finch", translation: "щегол" },
{ english: "dove", translation: "голубка" },
{ english: "kestrel", translation: "балобан" },
{ english: "lark", translation: "жаворонок" },
{ english: "vulture", translation: "гриф" },
{ english: "canard", translation: "утка" },
{ english: "tail", translation: "хвост" },
{ english: "wing", translation: "крыло" },
{ english: "nest", translation: "гнездо" },
{ english: "migration", translation: "миграция" },
{ english: "brood", translation: "выводок" },
{ english: "chirp", translation: "chirp" },
{ english: "song", translation: "песня" },
{ english: "feather", translation: "перо" },
{ english: "flight", translation: "полёт" },
{ english: "habitat", translation: "среда обитания" },
{ english: "mute", translation: "немой" },
{ english: "predator", translation: "хищник" },
{ english: "scavenger", translation: "падальщик" },
{ english: "egg", translation: "яйцо" },
{ english: "fledgling", translation: "птенец" },
{ english: "avian", translation: "авиан" },
{ english: "chirping", translation: "чириканье" },
{ english: "feeder", translation: "кормушка" },
{ english: "wingprint", translation: "отпечаток крыла" },
{ english: "trumpet", translation: "труба" },
{ english: "wingbeat", translation: "удар крыла" },
{ english: "duck", translation: "утка" },
{ english: "thrush", translation: "дрозд" },
{ english: "heron", translation: "цапля" }
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