const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


function performSearch() {
    const query = document.querySelector('#input1').value;
    if (!query) {
        alert('Пожалуйста, введите запрос!');
        return;
    }
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`; // Замените на ваш URL
    console.log('Поиск:', searchUrl);
    window.location.href = searchUrl;
}