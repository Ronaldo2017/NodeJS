let express = require('express')
let app = express()

//view engine
app.set('view engine', 'ejs')

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
    connection.query('select * from curso;', function(err, resultado){
        // {dados: resultado} = renderiza os dados na página
        res.render('./curso', {dados: resultado})
    })
});

app.listen(3000)
console.log('Servidor subiu!')