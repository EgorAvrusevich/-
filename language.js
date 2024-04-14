// Получаем элементы
var dropdownButton = document.querySelector('.dropdown-button');
var dropdownMenu = document.querySelector('.dropdown-menu');

// Обработчик события клика на кнопке
dropdownButton.addEventListener('click', function() {
  dropdownMenu.classList.toggle('open');
});