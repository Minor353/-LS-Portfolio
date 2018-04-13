<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['text'];
    

    $mail_message = '
    <html>
    <head>
        <title>Просьба связаться</title>
    </head>
    <body>
        <h2>Обращение</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Почта: ' . $email . '</li>
            <li>Сообщение: ' . $text . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта <admin@front-dev.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('vankert353@gmail.com', 'Заявка', $mail_message, $headers);


//    $info = [];
//
//    if ($mail) {
//        $info["status"] = "OK";
//        $info["mes"] = "Письмо успешно отправлено";
//    }else{
//        $info["status"] = "NO";
//        $info["mes"] = "На сервере произошла ошибка";
//    }
//
//    echo json_encode($info);

?>
