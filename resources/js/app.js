const { default: axios } = require('axios');

require('./bootstrap');

// Данные пользователя
var name = "";
var userKey = Math.random().toString(36).substr(2, 10);

// Ссылаемся на канал
const channel = Echo.channel('public.chat.1');

// Получаем обекты страницы
const form = document.getElementById('form');
const inputMessage = document.getElementById('input-message');
const messagesBox = document.getElementById('messages');
const loginBTN = document.getElementById('login');
const nameInput = document.getElementById('input-name');
const modal = document.getElementById("modal");

loginBTN.addEventListener('click', function() {
    if(nameInput.value != '')
    {
        name = nameInput.value;
        modal.remove();
    }
    else
    {
        alert('Имя не может быть пустым');
    }
});

form.addEventListener('submit', function (event) {

     // Убирает обновление страницы при отправке
    event.preventDefault();

    const userInput = inputMessage.value;

    axios.post('/chat-message', {
        message: userInput,
        name: name,
        userKey: userKey
    });

    inputMessage.value = "";

});

// Выводим информацию при подписке на канал
channel.subscribed(() => {
    console.log('Подключение к каналу завершено')
}).listen('.chat-message', (event) => {

    var date = new Date();

    audioObj = new Audio('storage/audio/sound.mp3');

    if(event.message != '')
    {

        if(event.userKey != userKey && name != '')
            audioObj.play();

        messagesBox.innerHTML += `<div class="message-block ${event.userKey === userKey ? "message-block-user" : ""}">
                                    <div class="message-boxer">
                                        <p class="name-text">${event.name}</p>
                                        <div class="content">
                                            <p class="message-user-box send-text ${event.userKey === userKey ? "message-block-content" : ""}">${event.message}</p>
                                        </div>
                                        <p class="time-text">${date.getHours()}:${date.getMinutes()}</p>
                                    </div>
                                  </div>`;
    }

});