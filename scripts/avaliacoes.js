// pegar avaliacoes do local storage
let avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];



// funcao secundaria para gerar o HTML da refeicao avaliada (das avaliacoes)
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



// funcao principal para gerar o HTML das avaliacoes
function renderAvaliacoes() {
    // verificar se não há avaliações
    if (avaliacoes.length === 0) {
        const avisoHTML = 
        `
            <div class="avaliacao-vazia">

                <div class="avaliacao-vazia-left">
                    <img src="images/chef.png" alt="Sem avaliações" class="img-vazio">
                </div>

                <div class="avaliacao-vazia-right">
                    <h2>Nenhuma avaliação disponível no momento</h2>
                    <p>Seja o primeiro a deixar sua opinião!</p>

                    <a href="index.html#avaliar" class="btn-avaliar">
                    Deixar uma avaliação
                    </a>
                </div>

            </div>
        `;

        return avisoHTML;
    }

    let avaliacoesHTML = '';

    avaliacoes.forEach((avaliacaoObject) => {
        // retirando elementos do objeto
        const nota = avaliacaoObject.nota;
        const nome = avaliacaoObject.nome;
        const campus = avaliacaoObject.campus;
        const comentario = avaliacaoObject.comentario;
        const data = avaliacaoObject.data;
        const refeicao = avaliacaoObject.refeicao;
        
        // gerando o html
        avaliacoesHTML += 
        `
        <div class="avaliacoes-container">
            <div class="avaliacao">
                <div class="avaliacao-up">
                    <div class="avaliacao-up-esquerda">
                        <img class="user-foto" src="images/foto_usuario.png" alt="Foto Usuario">
                        <div class="nome-data">
                            <p class="nome">${nome} - ${campus}</p>
                            <p class="data">Avaliou em ${data}</p>
                        </div>
                    </div>
                    <div class="avaliacao-up-direita">
                        <p>${nota}</p>
                        <img class="estrelas" src="images/${nota}_stars.png" alt="Estrelas">
                    </div>                
                </div>
                <div class="avaliacao-mid">
                    <p class="texto-avaliacao">"${comentario}"<p>
                </div>
                <div class="avaliacao-bottom">
                    <p>Refeição Avaliada: </p>
                    <div class="container-refeicao-avaliada">
                        ${refeicaoAvaliadaHTML(refeicao)}
                    </div>
                        
                </div>
            </div>
        </div>
        `;
    });

    return avaliacoesHTML;
}

// colocar o resultado da funcao no inner html
const avaliacoesHTML = renderAvaliacoes();

const containerElem = document.querySelector('.container');
containerElem.innerHTML = avaliacoesHTML;
