const prompt = require('prompt-sync')();

async function consultarLocalizacao() {
    try {
        let pag = prompt("Digite o ID do episódio (somente números): ");
        pag = pag.trim();

        const url = `https://rickandmortyapi.com/api/location/${pag}`;

        const resposta = await fetch(url);

        if (!resposta.ok) {
            console.log("Erro na consulta");
            return;
        }

        const dados = await resposta.json();

        console.log("Dados da localização:");
        console.log("id:", dados.id);
        console.log("name:", dados.name);
        console.log("tipo:", dados.type);
        console.log("dimensão:", dados.dimension);
        console.log("quantidade de residentes:", dados.residents.length);
        console.log("url:", dados.url);
        console.log("criado em:", dados.created);

    } catch (erro) {
        console.log("Erro ao acessar a API:");
        console.log(erro.message);
    }
}

consultarLocalizacao();