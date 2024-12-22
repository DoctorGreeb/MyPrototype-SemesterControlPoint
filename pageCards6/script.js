// Массив слов на английском и их переводов
const words = [
    { english: "break the ice", translation: "разрядить обстановку" },
    { english: "kick the bucket", translation: "умереть" },
    { english: "piece of cake", translation: "очень легко" },
    { english: "spill the beans", translation: "выдать секрет" },
    { english: "a blessing in disguise", translation: "неприятность, обернувшаяся благом" },
    { english: "burn the midnight oil", translation: "работать допоздна" },
    { english: "the ball is in your court", translation: "теперь твой ход" },
    { english: "hit the nail on the head", translation: "попасть в точку" },
    { english: "let the cat out of the bag", translation: "выдать секрет" },
    { english: "under the weather", translation: "нездоровится" },
    { english: "bite the bullet", translation: "принимать трудное решение" },
    { english: "costs an arm and a leg", translation: "стоить целое состояние" },
    { english: "barking up the wrong tree", translation: "идти не тем путем" },
    { english: "the best of both worlds", translation: "наилучшие условия" },
    { english: "hit the hay", translation: "отправиться спать" },
    { english: "once in a blue moon", translation: "раз в сто лет" },
    { english: "the early bird catches the worm", translation: "кто рано встает, тому Бог подает" },
    { english: "biting off more than you can chew", translation: "взять на себя слишком много" },
    { english: "don't count your chickens before they hatch", translation: "не планируй заранее" },
    { english: "actions speak louder than words", translation: "поступки говорят громче слов" },
    { english: "when pigs fly", translation: "когда рак на горе свистнет" },
    { english: "a leopard can't change its spots", translation: "изменения в человеке невозможны" },
    { english: "the tip of the iceberg", translation: "верхушка айсберга" },
    { english: "by the skin of your teeth", translation: "едва-едва" },
    { english: "get out of hand", translation: "выйти из-под контроля" },
    { english: "off the beaten track", translation: "вне привычных мест" },
    { english: "jump on the bandwagon", translation: "вступить в модное течение" },
    { english: "see eye to eye", translation: "понимать друг друга" }
];

const words2 = [
    { english: "to beat around the bush", translation: "ходить вокруг да около" },
    { english: "a penny for your thoughts", translation: "поделись своими мыслями" },
    { english: "to throw in the towel", translation: "сдаваться" },
    { english: "to pull someone's leg", translation: "подшутить над кем-то" },
    { english: "to feel under the weather", translation: "чувствовать себя неважно" },
    { english: "to get cold feet", translation: "потерять решимость" },
    { english: "to cry over spilled milk", translation: "плакать над пролитым молоком" },
    { english: "to take with a grain of salt", translation: "воспринимать с недоверием" },
    { english: "to add fuel to the fire", translation: "подливать масло в огонь" },
    { english: "to hit the ground running", translation: "сразу включиться в работу" },
    { english: "to let sleeping dogs lie", translation: "не будить лихо" },
    { english: "to have a chip on your shoulder", translation: "иметь обиду" },
    { english: "to go the extra mile", translation: "стараться изо всех сил" },
    { english: "to be in the same boat", translation: "быть в одной лодке" },
    { english: "to take the bull by the horns", translation: "взять быка за рога" },
    { english: "to be on cloud nine", translation: "находиться на седьмом небе от счастья" },
    { english: "to steal someone's thunder", translation: "украсть чей-то успех" },
    { english: "to go out on a limb", translation: "идти на риск" },
    { english: "to throw caution to the wind", translation: "рисковать" },
    { english: "to get the ball rolling", translation: "начать что-то" },
    { english: "to face the music", translation: "ответить за свои действия" },
    { english: "to bend over backwards", translation: "сгибаться назад" },
    { english: "to take the cake", translation: "поразить несоответствием" },
    { english: "to take it with a pinch of salt", translation: "относиться скептически" },
    { english: "to beat a dead horse", translation: "вытягивать мёртвую лошадь" },
    { english: "to cut corners", translation: "сокращать расходы" }
];

let currentIndex = 0;
let currentIndex2 = 0;
let isFlipping = false; // Флаг, который блокирует клик во время переворота
let isFlipping2 = false; // Флаг, который блокирует клик во время переворота

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

//11111111111111111111111111111111111
//11111111111111111111111111111111111

// Отображение текущего слова (только английского)
function showWord2() {
    if (words2.length === 0) return;
    const front2 = document.getElementById('front2');
    const back2 = document.getElementById('back2');

    const word2 = words2[currentIndex2];
    front2.textContent = word2.english;
    back2.textContent = ''; // Очистка перевода перед началом анимации

    // Сброс переворота карты
    document.getElementById('card2').classList.remove('flip2');
}

// Показ перевода после завершения анимации переворота
function showTranslation2() {
    const back2 = document.getElementById('back2');
    back2.textContent = words2[currentIndex2].translation;
}

// Функция для обработки клика и перехода к следующему слову
document.getElementById('card2').onclick = () => {
    if (isFlipping2) return; // Блокируем повторный клик
        isFlipping2 = true;
    const card2 = document.getElementById('card2');

    // Переворот карты
    card2.classList.add('flip2');

    // Показ перевода только после завершения поворота
    setTimeout(showTranslation2, 300); // Показ перевода на полпути переворота

    // Через 2 секунды сменить слово
    setTimeout(() => {
        currentIndex2 = (currentIndex2 + 1) % words2.length;
        showWord2();
        isFlipping2 = false; // Разблокируем клик после смены слова
    }, 2000);
};


// Запуск отображения первого слова
showWord();
showWord2();


