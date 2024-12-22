// Массив слов на английском и их переводов
const words = [
    { english: "tree", translation: "дерево" },
{ english: "river", translation: "река" },
{ english: "mountain", translation: "гора" },
{ english: "ocean", translation: "океан" },
{ english: "forest", translation: "лес" },
{ english: "lake", translation: "озеро" },
{ english: "sky", translation: "небо" },
{ english: "cloud", translation: "облако" },
{ english: "sun", translation: "солнце" },
{ english: "moon", translation: "луна" },
{ english: "star", translation: "звезда" },
{ english: "flower", translation: "цветок" },
{ english: "grass", translation: "трава" },
{ english: "hill", translation: "возвышенность" },
{ english: "valley", translation: "долина" },
{ english: "beach", translation: "пляж" },
{ english: "desert", translation: "пустыня" },
{ english: "island", translation: "остров" },
{ english: "canyon", translation: "каньон" },
{ english: "waterfall", translation: "водопад" },
{ english: "stone", translation: "камень" },
{ english: "soil", translation: "почва" },
{ english: "rock", translation: "скала" },
{ english: "breeze", translation: "ветерок" },
{ english: "rain", translation: "дождь" },
{ english: "snow", translation: "снег" },
{ english: "thunder", translation: "гром" },
{ english: "lightning", translation: "молния" },
{ english: "earth", translation: "земля" },
{ english: "wildlife", translation: "дикое животное" },
{ english: "ecosystem", translation: "экосистема" },
{ english: "spring", translation: "вода" },
{ english: "season", translation: "время года" },
{ english: "climate", translation: "климат" },
{ english: "landscape", translation: "пейзаж" },
{ english: "flora", translation: "флора" },
{ english: "fauna", translation: "фауна" },
{ english: "horizon", translation: "горизонт" },
{ english: "twig", translation: "ветка" },
{ english: "leaf", translation: "лист" },
{ english: "root", translation: "корень" },
{ english: "vine", translation: "лиана" },
{ english: "moss", translation: "мох" },
{ english: "algae", translation: "водоросли" },
{ english: "petal", translation: "лепесток" },
{ english: "seed", translation: "семя" },
{ english: "branch", translation: "ветка" },
{ english: "bark", translation: "кора" },
{ english: "puddle", translation: "лужа" },
{ english: "fossil", translation: "ископаемое" }
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