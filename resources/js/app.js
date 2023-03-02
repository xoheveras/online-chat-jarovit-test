const { default: axios } = require('axios');

require('./bootstrap');

// Данные пользователя
var name = "Test";

// Ссылаемся на канал
const channel = Echo.channel('public.chat.1');

// Получаем форму
const form = document.getElementById('form');
const inputMessage = document.getElementById('input-message');
const messagesBox = document.getElementById('messages');
const loginBTN = document.getElementById('login');
const nameInput = document.getElementById('input-name');
const modal = document.getElementById("modal");

loginBTN.addEventListener('click', function() {
    name = nameInput.value;
    modal.remove();
});

form.addEventListener('submit', function (event) {

     // Убирает обновление страницы при отправке
    event.preventDefault();

    const userInput = inputMessage.value;

    axios.post('/chat-message', {
        message: userInput,
        name: name
    });

});

// Выводим информацию при подписке на канал
channel.subscribed(() => {
    console.log('Подключение к каналу завершено')
}).listen('.chat-message', (event) => {

    // В event содержится вся информация которую мы передаем по сокету

    console.log(event);

    if(event.message != '')
        messagesBox.innerHTML += "<div>"+event.name+":"+event.message+"</div>";

});