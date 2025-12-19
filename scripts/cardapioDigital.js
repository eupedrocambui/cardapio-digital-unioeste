/*
    Salada salada
    Guarnições guarnicoes
    Proteínas proteinas
    Sobremesa sobremesa
    Bebida bebida
*/

// Criar o array de avaliacoes no local storage
let avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];



// Objeto dos cardapios do dia
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

const arrayRefeicaoItaipu = Object.values(cardapioItaipu).flat();
const arrayRefeicaoCampus = Object.values(cardapioCampus).flat();



// Função para passar o cardápio do objeto JS para o HTML
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

renderCardapio(cardapioItaipu, 'itaipu');
renderCardapio(cardapioCampus, 'unioeste');



// Botao Enviar da section avaliações
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

    // Valores dos elementos
    const nota = rangeNotaElem.value;
    const nome = nomeElem.value || 'Nome não informado';
    const campus = campusInputElem.value;
    const comentario = comentarioElem.value;
   
    // Resetando o range, nome, campus e comentario
    rangeNotaElem.value = 5;
    nomeElem.value = '';
    campusUnioesteRadioElem.checked = true;
    comentarioElem.value = '';
    valorNotaElem.innerHTML = '5';
    estrelasElem.src = "images/5_stars.png";

    // Guardando a avaliacao no local storage
    const avaliacao = {
        nota: nota,
        nome: nome,
        campus: campus,
        comentario: comentario,
        data: dayjs().format('DD [de] MMMM, YYYY'),
        refeicao: (campus === 'Campus Unioeste') ? arrayRefeicaoCampus : arrayRefeicaoItaipu
    }

    avaliacoes.unshift(avaliacao);
    localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));

    // Carregando página de obrigado
    window.location.href = "obrigadoAvaliacao.html";
}); 



// data do cardapio
dayjs.locale('pt-br');
const today = dayjs().format('DD [de] MMMM [de] YYYY');
const todayMobile = dayjs().format('DD/MM/YYYY');

/*const dataCardapioElem = document.querySelector('.js-data-cardapio');
dataCardapioElem.innerHTML = today;

const dataCardapioMobileElem = document.querySelector('.js-data-cardapio-mobile');
dataCardapioMobileElem.innerHTML = todayMobile;*/

if (document.querySelector('.js-data-cardapio')) {
    const dataCardapioElem = document.querySelector('.js-data-cardapio');
    dataCardapioElem.innerHTML = today;
} else {
    const dataCardapioMobileElem = document.querySelector('.js-data-cardapio-mobile');
    dataCardapioMobileElem.innerHTML = todayMobile;
}



// input 'avalie sua refeicao'
const range = document.getElementById("rangeNota");
const valor = document.getElementById("valorNota");
const estrelas = document.querySelector(".estrelas");

range.addEventListener("input", () => {
    const nota = range.value;

    // Atualiza o texto do número
    valor.textContent = nota;

    // Atualiza a imagem das estrelas
    estrelas.src = `images/${nota}_stars.png`;
});