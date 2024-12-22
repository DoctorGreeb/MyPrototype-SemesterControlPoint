// Массив слов на английском и их переводов
const words = [
 { english: "skyscraper", translation: "небоскрёб" },
{ english: "bridge", translation: "мост" },
{ english: "street", translation: "улица" },
{ english: "park", translation: "парк" },
{ english: "square", translation: "площадь" },
{ english: "traffic", translation: "трафик" },
{ english: "building", translation: "здание" },
{ english: "bus station", translation: "автобусная станция" },
{ english: "subway", translation: "метро" },
{ english: "market", translation: "рынок" },
{ english: "museum", translation: "музей" },
{ english: "theater", translation: "театр" },
{ english: "library", translation: "библиотека" },
{ english: "hotel", translation: "отель" },
{ english: "restaurant", translation: "ресторан" },
{ english: "cafe", translation: "кафе" },
{ english: "shop", translation: "магазин" },
{ english: "pavement", translation: "тротуар" },
{ english: "crosswalk", translation: "пешеходный переход" },
{ english: "bus", translation: "автобус" },
{ english: "train", translation: "поезд" },
{ english: "airport", translation: "аэропорт" },
{ english: "neighborhood", translation: "район" },
{ english: "residential", translation: "жилой" },
{ english: "district", translation: "округ" },
{ english: "skatepark", translation: "скейтпарк" },
{ english: "playground", translation: "детская площадка" },
{ english: "fountain", translation: "фонтан" },
{ english: "plaza", translation: "плаза" },
{ english: "city hall", translation: "городская ратуша" },
{ english: "police station", translation: "полицейский участок" },
{ english: "fire station", translation: "пожарная станция" },
{ english: "monument", translation: "памятник" },
{ english: "landmark", translation: "ориентир" },
{ english: "viewpoint", translation: "смотровая площадка" },
{ english: "suburb", translation: "пригород" },
{ english: "boulevard", translation: "бульвар" },
{ english: "sidewalk", translation: "тротуар" },
{ english: "canal", translation: "канал" },
{ english: "bike path", translation: "велосипедная дорожка" },
{ english: "cultural center", translation: "культурный центр" },
{ english: "exhibition", translation: "выставка" },
{ english: "festival", translation: "фестиваль" },
{ english: "entertainment", translation: "развлечения" },
{ english: "conference", translation: "конференция" },
{ english: "community", translation: "сообщество" },
{ english: "urban", translation: "городской" },
{ english: "infrastructure", translation: "инфраструктура" },
{ english: "development", translation: "развитие" },
{ english: "downtown", translation: "центр города" }
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