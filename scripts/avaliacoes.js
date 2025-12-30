// Pegar/criar o array de avaliações do local storage
let avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];



// refeicaoAvaliadaHTML -> gera o HTML da refeição avaliada
function refeicaoAvaliadaHTML(arrayRefeicao) {
    let refeicaoAvaliadaHTML = '';

    arrayRefeicao.forEach((comida) => {
        refeicaoAvaliadaHTML +=
        `
            <div class="refeicao">
                <p>${comida}</p>
            </div>
        `;
    });

    return refeicaoAvaliadaHTML;
}



// renderAvaliacoes -> gera o HTML das avaliações salvas no local storage
function renderAvaliacoes() {
    // verificar se não há avaliações, se não houver gera um aviso
    if (avaliacoes.length === 0) {
        const avisoHTML = 
        `
            <div class="avaliacao-vazia">

                <div class="avaliacao-vazia-left">
                    <img src="./images/chef.png" alt="Sem avaliações" class="img-vazio">
                </div>

                <div class="avaliacao-vazia-right">
                    <h2>Nenhuma avaliação disponível no momento</h2>
                    <p>Seja o primeiro a deixar sua opinião!</p>

                    <a href="./index.html#avaliar" class="btn-avaliar">
                    Deixar uma avaliação
                    </a>
                </div>

            </div>
        `;

        return avisoHTML;
    }

    let avaliacoesHTML = '';

    avaliacoes.forEach((avaliacaoObject) => {
        // extraindo as informações da avaliação
        const nota = avaliacaoObject.nota;
        const nome = avaliacaoObject.nome;
        const campus = avaliacaoObject.campus;
        const codigoCampus = avaliacaoObject.codigoCampus;
        const comentario = avaliacaoObject.comentario;
        const data = avaliacaoObject.data;
        const codigoData = avaliacaoObject.codigoData;
        const refeicao = avaliacaoObject.refeicao;
        
        // gerando o html com as informações extraídas
        avaliacoesHTML += 
        `
        <div class="avaliacoes-container">
            <div class="avaliacao">
                <div class="avaliacao-up">
                    <div class="avaliacao-up-esquerda">
                        <img class="user-foto" src="./images/foto_usuario.png" alt="Foto Usuario">
                        <div class="nome-data">
                            <p class="nome">${nome} - ${campus}</p>
                            <p class="data">Avaliou em ${data}</p>
                        </div>
                    </div>
                    <div class="avaliacao-up-direita">
                        <img class="estrelas" src="./images/${nota}_stars.png" alt="Estrelas">
                    </div>                
                </div>
                <div class="avaliacao-mid">
                    <p class="texto-avaliacao">"${comentario}"<p>
                </div>
                <div class="estrelas-mobile">
                    <p>Avaliação: </p>
                    <img class="estrelas" src="./images/${nota}_stars.png" alt="Estrelas">
                </div>
                <div class="avaliacao-bottom">
                    <p>Refeição Avaliada: </p>
                    <div class="container-refeicao-avaliada">
                        ${refeicaoAvaliadaHTML(refeicao)}
                    </div>    
                </div>
                <div class="avaliacao-bottom-mobile">
                    <button data-codigo="${codigoData}${codigoCampus}" class="button-refeicao-avaliada-mobile">Ver Refeição Avaliada</button> 
                </div>
            </div>
        </div>
        `;
    });

    return avaliacoesHTML;
}

// Inserindo o HTML das avaliações na página
const avaliacoesHTML = renderAvaliacoes();

const containerElem = document.querySelector('.container');
containerElem.innerHTML = avaliacoesHTML;



// Botões "Ver Refeição Avaliada"
const buttonRefeicaoAvaliadaArray = document.querySelectorAll('.button-refeicao-avaliada-mobile');

buttonRefeicaoAvaliadaArray.forEach((buttonRefeicaoAvaliada) => {
    buttonRefeicaoAvaliada.addEventListener('click', () => {
        const codigo = buttonRefeicaoAvaliada.dataset.codigo;
        window.location.href = `refeicaoAvaliada.html?data=${codigo}`;
    });
});
