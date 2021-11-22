let servidor = require('http')//representa o servidor, modulo nativo do node
let fs = require('fs')

servidor.createServer(function (request, response) {

    if (request.url == '/index') {
        fs.readFile(__dirname + '/index.html', function (err, html) {
            response.end(html)
        })
    } else if (request.url == '/teste') {
        fs.readFile(__dirname + '/teste.html', function (err, html) {
            response.end(html)
        })
    }

}).listen(8001)//escutando o servidor/ numero da porta

console.log('servidor subiu')
