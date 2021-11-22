const express = require('express')//importando o modulo express
const app = express()//recebe um objeto do tipo express, app é uma copia do express

//busca um conteúdo
//criando a rota para o servidor
//1 parametro = caminho da rota
//2 || = funcao

// app.metodo = é o tipo de requisição para fazer
app.get('/', function(req, res){
    //devolutiva para o browser
    res.send('RONALDO, DESENVOLVEDOR WEB')
})
app.listen(8001)//porta 

console.log('deu certo')

/**
 * ROTEAMENTO
 * REFERE-SE À DETERMINAÇÃO DE COMO UM APLICATIVO RESPONDE A UMA SOLICITAÇÃO DO CLIENTE POR UM ENDPOIN ESPECÍFICO, QUE É UMA URI(OU CAMINHO) E UM MÉTODO DE SOLICITAÇÃO HTTP ESPECÍFICO(GET, POST, E ASSIM POR DIANTE). CADA ROTA PODE TER UMA OU MAIS FUNÇÕES DE MANIPULAÇÃO QUE SÃO EXECUTADAS QUANDO A ROTA É CORRESPONDIDA.(É UM MÉTODO DE SOLICITAÇÃO HTTP)
 * 
 * 
 * 
 * MÉTODOS
 * GET - RECUPERA OS DADOS IDENTIFICADOS PELA URL, RQUISIÇÕES GET FAZEM
 * COM QUE O SERVIDOR DEVOLVA ALGO PARA O CLIENTE, ALGO QUE ESTA "DENTRO" DO SERVIDOR
 * 
 * POST - CRIA UM NOVO RECURSO, SIGNIFICA QUE ESTAMOS QUERENDO INCLUIR ALGUM RECURSO NO SERIVDOR
 * 
 * PUT - ATUALIZA UM RECURSO, SIGNIFICA QUE ESTAMOS QUERENDO ATUALIZAR ALGUM RECURSO NO SERVIDOR
 * 
 * DELETE - APAGA UM RECURSO, SIGNIFICA QUE ESTAMOS QUERENDO APAGAR ALGUM RECURSO NO SERVIDOR
 * 
 * 
 */