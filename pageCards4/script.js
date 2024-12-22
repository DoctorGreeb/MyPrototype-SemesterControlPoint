// Массив слов на английском и их переводов
const words = [
 { english: "ant", translation: "муравей" },
{ english: "bee", translation: "пчела" },
{ english: "bumblebee", translation: "шмель" },
{ english: "butterfly", translation: "бабочка" },
{ english: "beetle", translation: "жук" },
{ english: "moth", translation: "мотылёк" },
{ english: "mosquito", translation: "комар" },
{ english: "locust", translation: "саранча" },
{ english: "spider", translation: "паук" },
{ english: "grasshopper", translation: "кузнечик" },
{ english: "cicada", translation: "цикада" },
{ english: "cockroach", translation: "таракан" },
{ english: "termite", translation: "скопа" },
{ english: "anthill", translation: "муравейник" },
{ english: "cobweb", translation: "паутина" },
{ english: "dragonfly", translation: "стрекоза" },
{ english: "chrysalis", translation: "пенёк" },
{ english: "longhorn beetle", translation: "уса́ч" },
{ english: "aphid", translation: "тля" },
{ english: "biting midge", translation: "слепень" },
{ english: "ground beetle", translation: "жужелица" },
{ english: "ladybug", translation: "сонечко" },
{ english: "bug", translation: "клоп" },
{ english: "sand fly", translation: "песчанка" },
{ english: "horsefly", translation: "овод" },
{ english: "buzzing", translation: "жужжание" },
{ english: "larva", translation: "личинка" },
{ english: "wings", translation: "крылья" },
{ english: "honey", translation: "мед" },
{ english: "pollination", translation: "опыление" },
{ english: "insectivorous", translation: "насекомоядные" },
{ english: "caterpillar", translation: "гусеница" },
{ english: "delicacy", translation: "деликатес" },
{ english: "owlet moth", translation: "совка" },
{ english: "entomologist", translation: "энтомолог" },
{ english: "pollen", translation: "пончик" },
{ english: "scent", translation: "запах" },
{ english: "migration", translation: "миграция" },
{ english: "defense", translation: "защита" },
{ english: "communication", translation: "общение" },
{ english: "termites", translation: "термиты" },
{ english: "pheromones", translation: "феромоны" },
{ english: "colony", translation: "колония" },
{ english: "exoskeleton", translation: "оболочка" },
{ english: "flying", translation: "летающий" },
{ english: "life cycle", translation: "цикл" },
{ english: "infusion", translation: "настойка" },
{ english: "cocoons", translation: "коконы" },
{ english: "mating", translation: "спаривание" },
{ english: "evolution", translation: "эволюция" }
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