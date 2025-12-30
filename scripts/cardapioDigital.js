/* 
Pegar/criar o array de avaliações do local storage
"avaliacoes" é um array com vários objetos, cada objeto representa uma avaliação de um usuário 
*/
let avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];



// Inserindo a data do cardápio na página
dayjs.locale('pt-br');
const today = dayjs().format('DD [de] MMMM [de] YYYY'); // formatação para desktop
const todayMobile = dayjs().format('DD/MM/YYYY'); // formatação para mobile

const dataCardapioElem = document.querySelector('.js-data-cardapio');
dataCardapioElem.innerHTML = today; // inserindo data no html (desktop)

const dataCardapioMobileElem = document.querySelector('.js-data-cardapio-mobile');
dataCardapioMobileElem.innerHTML = todayMobile; // inserindo data no html (mobile)



// Objeto do cardápio do dia (itaipu parquetec)
const cardapioItaipu = {
    salada: [
        'Alface',
        'Tomate'
    ],
    guarnicoes: [
        'Arroz Branco',
        'Feijão Preto',
        'Macarrão',
        'Batata Assada'
    ],
    proteinas: [
        'Frango',
        'Ovo Frito'
    ],
    sobremesa: [
        'Mousee de Chocolate'
    ],
    bebida: [
        'Suco de Uva'
    ]
};

// Objeto do cardápio do dia (campus unioeste)
const cardapioCampus = {
    salada: [
        'Alface',
        'Cenoura Ralada'
    ],
    guarnicoes: [
        'Arroz Branco',
        'Feijão Carioca',
        'Purê de Batata',
    ],
    proteinas: [
        'Sobrecoxa Assada',
        'Carne Moída'
    ],
    sobremesa: [
        'Gelatina'
    ],
    bebida: [
        'Suco de Laranja',
        'Suco de Abacaxi'
    ]
};

// Arrays dos alimentos de cada campus sem as categorias
const arrayRefeicaoItaipu = Object.values(cardapioItaipu).flat();
const arrayRefeicaoCampus = Object.values(cardapioCampus).flat();



// RenderCardapio -> Colocar cada alimento do cardápio em sua categoria na página
function renderCardapio(objetoCardapio, campus) {
    for (const categoria in objetoCardapio) {
        const arrayAlimentos = objetoCardapio[categoria];

        let alimentosHTML = ``;
        arrayAlimentos.forEach((alimento) => {
            alimentosHTML += 
            `
                <div class="comida">${alimento}</div>
            `;
        });

        document.querySelector(`.js-${categoria}-${campus}`).innerHTML = alimentosHTML;
    }
}

renderCardapio(cardapioItaipu, 'itaipu'); // carrega o cardápio (itaipu parquetec)
renderCardapio(cardapioCampus, 'unioeste'); // carrega o cardápio (campus unioeste)



// Estrelas "Sua Avaliação Geral", seção avaliações
const range = document.getElementById("rangeNota");
const valor = document.getElementById("valorNota");
const estrelas = document.querySelector(".estrelas");

range.addEventListener("input", () => {
    const nota = range.value;

    // atualiza o texto do número
    valor.textContent = nota;

    // atualiza a imagem das estrelas
    estrelas.src = `./images/${nota}_stars.png`;
});



// Contador de caracteres do input "Seu Nome" da seção avaliações
const inputNomeElem = document.getElementById('name');
const contadorNomeElem = document.querySelector('.contador-nome');

inputNomeElem.addEventListener('input', () => {
    const nomeLength = inputNomeElem.value.length;
    contadorNomeElem.innerHTML = `${nomeLength}/30`;
    if (nomeLength === 30) {
        contadorNomeElem.style.color = '#ff2c2c';
    } else {
        contadorNomeElem.style.color = '#3f3f3f';
    }
});

// Contador de caracteres do input "Comentários Detalhados" da seção avaliações
const inputComentarioElem = document.getElementById('coment');
const contadorComentarioElem = document.querySelector('.contador-comentario');

inputComentarioElem.addEventListener('input', () => {
    const comentarioLength = inputComentarioElem.value.length;
    contadorComentarioElem.innerHTML = `${comentarioLength}/500`;
    if (comentarioLength === 500) {
        contadorComentarioElem.style.color = '#ff2c2c';
    } else {
        contadorComentarioElem.style.color = '#3f3f3f';
    }
});



// Botão "Enviar Avaliação" da seção avaliações
const botaoEnviarElem = document.querySelector('.botao-enviar');
botaoEnviarElem.addEventListener('click', () => {
    // Elementos no HTML
    const rangeNotaElem = document.querySelector('.rangeNota');
    const nomeElem = document.getElementById('name');
    const campusInputElem = document.querySelector('input[name="campus"]:checked');
    const campusUnioesteRadioElem = document.getElementById('js-campus-unioeste');
    const comentarioElem = document.getElementById('coment');
    const valorNotaElem = document.getElementById('valorNota');
    const estrelasElem = document.getElementById('estrelas');

    // Extraindo os valores dos elementos
    const nota = rangeNotaElem.value;
    const nome = nomeElem.value || 'Nome não informado';
    const campus = campusInputElem.value;
    const comentario = comentarioElem.value;

    // Verificando se há no mínimo 15 caracteres no comentário
    if (comentario.length < 15) {
        const warningElem = document.querySelector('.aviso-comentario');
        warningElem.style.display = 'block';
        return;
    }
   
    // Resetando o range, nome, campus e comentário
    rangeNotaElem.value = 5;
    nomeElem.value = '';
    campusUnioesteRadioElem.checked = true;
    comentarioElem.value = '';
    valorNotaElem.innerHTML = '5';
    estrelasElem.src = "./images/5_stars.png";

    // Guardando a avaliação no local storage
    const avaliacao = {
        nota: nota,
        nome: nome,
        campus: campus,
        codigoCampus: (campus === 'Campus Unioeste') ? 1 : 2, // cod 1: campus unioeste | cod 2: itaipu parquetec
        comentario: comentario,
        data: dayjs().format('DD [de] MMMM, YYYY'),
        codigoData: dayjs().format('DDMMYY'),
        refeicao: (campus === 'Campus Unioeste') ? arrayRefeicaoCampus : arrayRefeicaoItaipu, // array com os alimentos
        refeicaoCompleta: (campus === 'Campus Unioeste') ? cardapioCampus : cardapioItaipu, // objeto com as categorias e os alimentos
    }

    // Colocando a avaliação (objeto) na primeira posição (mais recente) do array de avaliações
    avaliacoes.unshift(avaliacao); 

    // Guardando o array de avaliações no local storage
    localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));

    // Guardando o cardápio completo do campus selecionado no local storage (para usar em refeicaoAvaliada.html)
    localStorage.setItem(`refeicao${avaliacao.codigoData}${avaliacao.codigoCampus}`, JSON.stringify(avaliacao.refeicaoCompleta));

    // Carregando página de obrigado
    window.location.href = "obrigadoAvaliacao.html";
}); 