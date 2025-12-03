/* 

<div class="avaliacao">
    <div class="avaliacao-up">
        <div class="avaliacao-up-esquerda">
            <img class="user-foto" src="images/foto_usuario.png" alt="Foto Usuario">
            <div class="nome-data">
                <p class="nome">Matheus Pereira - Campus Unioeste</p>
                <p class="data">Avaliou em 10 de Novembro, 2025</p>
            </div>
        </div>
        <div class="avaliacao-up-direita">
            <p>5.0</p>
            <img class="estrelas" src="images/5_stars.png" alt="Estrelas">
        </div>                
    </div>
    <div class="avaliacao-mid">
        <p class="texto-avaliacao">"A refeição de hoje no restaurante universitário foi satisfatória. O arroz e o feijão estavam bem preparados, com tempero equilibrado. O frango grelhado estava um pouco seco, mas tinha bom sabor. A salada estava fresca e variada, o que é sempre um ponto positivo. O suco poderia ser menos doce. No geral, a refeição cumpriu bem seu papel: nutritiva e acessível. Considerando o custo-benefício, vale a pena, embora pequenas melhorias possam torná-la ainda melhor"<p>
    </div>
    <div class="avaliacao-bottom">
        <p>Refeição Avaliada: </p>
        <div class="container-refeicao-avaliada">
            <div class="refeicao">
                <p>Arroz</p>
            </div>
            <div class="refeicao">
                <p>Feijão</p>
            </div>
        </div>
            
    </div>
</div>

*/

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
