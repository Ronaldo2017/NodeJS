let servidor = require('http')//representa o servidor, modulo nativo do node

servidor.createServer(function(req, res){
    res.end('<h1>EU SOU DESENVOLVEDOR WEB, 2022</H1>')
}).listen(8001)//escutando o servidor/ numero da porta

console.log('servidor subiu')

