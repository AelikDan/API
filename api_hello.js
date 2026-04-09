const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

//Função para manipular
const requestHandler = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    //Definir a lógica da rota
    if(req.url === '/hello' && req.method === 'GET'){
        res.end(JSON.stringify({
            message: 'Ola Mundo!'
        }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            error: 'Rota não encontrada'
        }));
    }
};

//Criando o servidor
const server = http.createServer(requestHandler);

//Iniciando o servidor
server.listen(port, hostname, () =>{
    console.log(`Servidor rodando em http://${hostname}:${port}/`)
})