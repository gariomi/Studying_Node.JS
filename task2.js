const http = require('http'); //подключаем модуль http
const url = require('url');  //подключаем модуль url

http.createServer((request, response) => { //создаём сервер
    console.log('server work'); // консоль при работе сервера выдаёт "server work"
    if (request.method == 'GET') {  // GET -> получить обработать
        
        let urlRequest = url.parse(request.url, true); // парсим то, что написали в строку ввода
        const name = urlRequest.query.name;  // объявляем переменную "name"
        const lastName = urlRequest.query.lastName; // объявляем переменную "lastname"

        const responseBody = { fullName: `${name} ${lastName}`}; // объявляем переменную, которую будет выводить сервер

        const responseString = JSON.stringify(responseBody); // преобразовываем "responseBody" в строку
        response.end(responseString);  //ответ сервера(вывод на экран "responseString")
    }
}).listen(3000); //порт, который будем слушать