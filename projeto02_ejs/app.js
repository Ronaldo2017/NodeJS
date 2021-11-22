let express = require('express')
let app = express()

//criando a rota
app.get('/curso', function(req, res){
    let mysql = require('mysql')

    //conexão com bd
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'qibyte'
    })

    //monta a query para trazer os dados do bd
    connection.query('select descricao from curso;', function(err, resultado){
        res.send(resultado)//traz o arquivo no formato json
    })
});

app.listen(3000)
console.log('Servidor subiu!')