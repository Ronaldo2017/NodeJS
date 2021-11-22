const express = require('express')
const app = express()

//view engine
app.set('view engine', 'ejs')

//traz as informações do formulario, para o backend, trabalhar com as informações
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

const mysql = require('mysql')

//conexão com bd
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'qibyte'
})


//criando a rota
app.get('/curso', function (req, res) {
    //monta a query para trazer os dados do bd
    connection.query('select * from curso;', function (err, resultado) {
        // {dados: resultado} = renderiza os dados na página
        res.render('./curso', { dados: resultado })
    })
});

//rota para inserir dados no bd
app.post('/cursos/salvar', function (req, res) {
    const dados = req.body//vem direto do corpo da requisição

    connection.query('insert into curso SET ?', dados, function (err, resultado) {
        res.redirect('/curso')//devolve a chamada para o navegador, para mesma página que fez a requisição
    })
})

//rota para update
app.get('/editar/:id', function(req, res, next){
    connection.query('select * from curso where id = ' + req.params.id, function(err, linha){
        res.render('editar',  {
            id: linha[0].ID,
            descricao: linha[0].DESCRICAO,
            carga_horaria: linha[0].CARGA_HORARIA
        })
    })
})

//rota para atualizar as informações/ POST
app.post('/atualizar/:id', function(req, res, next){
    const dados = req.body

    connection.query('UPDATE curso SET ? WHERE id = ' + req.params.id, dados, function(err)//SEGUNDO PARAMETRO OPCIONAL
    {
        res.redirect('/curso')
    })
})

app.get('/curso/deletar/:id', function(req, res, next){
    const id = req.params.id

    connection.query('delete from curso where id = ' + id, function(err){
        res.redirect('/curso')
    })
})

app.listen(3000)
console.log('Servidor subiu!')