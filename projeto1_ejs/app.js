const express = require('express')
const app = express()//instancia objeto

//renderiza as paginas é o EJS
app.set('view engine', 'ejs')

//criando rotas
app.get('/', function (req, res) {//rota principal/home

    //criação do objeto cursos que está armazenando a descricao e ch dos cursos
    let cursos = [
        { descricao: 'Logica de Programação', ch: 40 },
        { descricao: 'Banco de Dados', ch: 40 },
        { descricao: 'JavaScript', ch: 20 },
        { descricao: 'NodeJS', ch: 40 },
    ]

    //metodo que vai renderizar o arquivo index com os dados do objeto cursos
    // 1 parametro: é o que manda para página, e recebe o objeto, que vai para página
    // 2 -parametro: é o objeto em si
    res.render('pages/index', { cursos: cursos })
})


// <!-- criando a rota da pagina sobre -->
app.get('/sobre', function(req, res){
    res.render('pages/sobre')
})

console.log('Servidor subiu')
app.listen(3000)