//Importar a biblioteca json-server
const jsonServer = require('json-server');

//Importa o módulo express
const express = require('express');

//Criar uma instancia do servidor JsonServer
const server = jsonServer.create();

//Criar um roteador com o arquivo db.json
//O roteador define as rotas do servidor (pessoas)
const router = jsonServer.router('db.json');

//Importa os padrões do JsonServer
const middlewares = jsonServer.defaults();

//Funções que são executadas em cada requisição feita com o servidor
server.use(middlewares);

//Define a porta em que o servidor irá rodar
//No Render a porta vem em process.env.PORT, no computador usa a 3000
const porta = process.env.PORT || 3000;

//Configura o servidor para usar os arquivos da pasta public (HTML, CSS e JS)
server.use(express.static('public'));

//Define a rota principal
//Enviando o arquivo index.html
server.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
})

//Usa o roteador criado
server.use(router);

//Inicia o servidor na porta definida e exibe uma mensagem no console
server.listen(porta, () => {
    console.log(`JSON SERVER está rodando em http://localhost:${porta}`);
})
