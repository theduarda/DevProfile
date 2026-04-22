const formularioBusca = document.getElementById('formulario-busca');
const campoUsuario = document.getElementById('campo-usuario');
const listaRepositorios = document.getElementById('lista-repositorios');
const containerResultados = document.getElementById('container-resultados');

async function dispararBusca(evento) {
    evento.preventDefault();
    const usuario = campoUsuario.value;

    listaRepositorios.innerHTML = ""; 
    containerResultados.innerHTML = "<p>Carregando...</p>";

    const dados = await buscarDados(usuario);
    renderizarTela(dados);
}

async function buscarDados(usuario) {
    const resposta = await fetch(`https://api.github.com/users/${usuario}/repos`);
    if (resposta.status === 404) return "nao_encontrado";
    return await resposta.json();
}

function renderizarTela(dados) {
    containerResultados.innerHTML = "";

    if (dados === "nao_encontrado") {
        containerResultados.innerHTML = "<p>Usuário não encontrado.</p>";
    } else if (dados.length === 0) {
        containerResultados.innerHTML = "<p>Este usuário não possui repositórios públicos.</p>";
    } else {
        dados.forEach(repo => {
            const card = criarCard(repo);

            
            listaRepositorios.appendChild(card);
        });
        containerResultados.appendChild(listaRepositorios);
    }
}

function criarCard(repo) {
    const li = document.createElement('li');
    li.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "Sem descrição disponível."}</p>
        <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
    `;
    return li;
}

formularioBusca.addEventListener('submit', dispararBusca);