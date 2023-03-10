<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ mix('storage/css/chat.css') }}">
    <title>Document</title>
</head>
<body>

    <div class="modal-name" id="modal">
        <div class="container-modal">
            <input type="text" id="input-name" placeholder="Введите имя">
            <div class="modal-button" id="login">Войти</div>
        </div>
    </div>

    <div class="chat-box">
        <div class="message-box" id="messages">
        </div>
            <form id="form">
                <input id="input-message" type="text" placeholder="Message...">
            </form>
        </div>
</body>
    <script src="{{ mix('js/app.js') }}"></script>
</html>