// Массив слов на английском и их переводов
const words = [
    { english: "advantage", translation: "преимущество" },
    { english: "advertisement", translation: "реклама" },
    { english: "agreement", translation: "соглашение" },
    { english: "analysis", translation: "анализ" },
    { english: "application", translation: "заявка" },
    { english: "appointment", translation: "встреча" },
    { english: "argument", translation: "аргумент" },
    { english: "arrival", translation: "прибытие" },
    { english: "attempt", translation: "попытка" },
    { english: "attention", translation: "внимание" },
    { english: "background", translation: "фон" },
    { english: "behaviour", translation: "поведение" },
    { english: "belief", translation: "вера" },
    { english: "challenge", translation: "вызов" },
    { english: "choice", translation: "выбор" },
    { english: "circumstance", translation: "обстоятельство" },
    { english: "collection", translation: "коллекция" },
    { english: "communication", translation: "общение" },
    { english: "comparison", translation: "сравнение" },
    { english: "competition", translation: "соревнование" },
    { english: "complaint", translation: "жалоба" },
    { english: "confidence", translation: "уверенность" },
    { english: "conflict", translation: "конфликт" },
    { english: "connection", translation: "связь" },
    { english: "consideration", translation: "рассмотрение" },
    { english: "construction", translation: "строительство" },
    { english: "contribution", translation: "вклад" },
    { english: "conversation", translation: "разговор" },
    { english: "criticism", translation: "критика" },
    { english: "decision", translation: "решение" },
    { english: "departure", translation: "отъезд" },
    { english: "description", translation: "описание" },
    { english: "development", translation: "развитие" },
    { english: "discovery", translation: "открытие" },
    { english: "discussion", translation: "обсуждение" },
    { english: "education", translation: "образование" },
    { english: "election", translation: "выборы" },
    { english: "emphasis", translation: "акцент" },
    { english: "employment", translation: "занятость" },
    { english: "environment", translation: "окружающая среда" },
    { english: "equipment", translation: "оборудование" },
    { english: "establishment", translation: "учреждение" },
    { english: "experience", translation: "опыт" },
    { english: "explanation", translation: "объяснение" },
    { english: "expression", translation: "выражение" },
    { english: "familiarity", translation: "знакомство" },
    { english: "foundation", translation: "основание" },
    { english: "friendship", translation: "дружба" },
    { english: "government", translation: "правительство" },
    { english: "guidance", translation: "руководство" },
    { english: "imagination", translation: "воображение" },
    { english: "importance", translation: "важность" },
    { english: "improvement", translation: "улучшение" },
    { english: "independence", translation: "независимость" },
    { english: "information", translation: "информация" },
    { english: "investment", translation: "инвестиция" },
    { english: "leadership", translation: "лидерство" },
    { english: "maintenance", translation: "обслуживание" },
    { english: "management", translation: "управление" },
    { english: "measurement", translation: "измерение" },
    { english: "movement", translation: "движение" },
    { english: "negotiation", translation: "переговоры" },
    { english: "obligation", translation: "обязанность" },
    { english: "occupation", translation: "профессия" },
    { english: "opportunity", translation: "возможность" },
    { english: "organization", translation: "организация" },
    { english: "participation", translation: "участие" },
    { english: "partnership", translation: "партнёрство" },
    { english: "perception", translation: "восприятие" },
    { english: "performance", translation: "производительность" },
    { english: "perspective", translation: "перспектива" },
    { english: "possibility", translation: "возможность" },
    { english: "preference", translation: "предпочтение" },
    { english: "preparation", translation: "подготовка" },
    { english: "presentation", translation: "презентация" },
    { english: "priority", translation: "приоритет" },
    { english: "production", translation: "производство" },
    { english: "protection", translation: "защита" },
    { english: "publication", translation: "публикация" },
    { english: "qualification", translation: "квалификация" },
    { english: "recommendation", translation: "рекомендация" },
    { english: "recognition", translation: "признание" },
    { english: "relationship", translation: "отношение" },
    { english: "requirement", translation: "требование" },
    { english: "responsibility", translation: "ответственность" },
    { english: "retirement", translation: "выход на пенсию" },
    { english: "satisfaction", translation: "удовлетворение" },
    { english: "suggestion", translation: "предложение" },
    { english: "technology", translation: "технология" },
    { english: "temperature", translation: "температура" },
    { english: "understanding", translation: "понимание" },
    { english: "volunteer", translation: "волонтёр" },
    { english: "willingness", translation: "готовность" }
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