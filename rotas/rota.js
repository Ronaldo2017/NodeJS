let servidor = require('http')//representa o servidor, modulo nativo do node

servidor.createServer(function(req, res){

    let categoria = req.url

    if(categoria == '/front-end'){
        res.end('<h1>EU SOU DESENVOLVEDOR WEB, 2022</H1>')
    }else if(categoria == '/back-end'){
        res.end('<h1>Tecnologias back-end</h1>')
    }
    
}).listen(8001)//escutando o servidor/ numero da porta

console.log('servidor subiu')
