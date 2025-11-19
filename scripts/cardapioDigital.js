/*
    Salada salada
    Guarnições guarnicoes
    Proteínas proteinas
    Sobremesa sobremesa
    Bebida bebida
*/

// Criar o array de avaliacoes no local storage
let avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];

// Botao Enviar da section avaliações
const botaoEnviarElem = document.querySelector('.botao-enviar');
botaoEnviarElem.addEventListener('click', () => {
    // Elementos no HTML
    const rangeNotaElem = document.querySelector('.rangeNota');
    const nomeElem = document.getElementById('name');
    const campusInputElem = document.querySelector('input[name="campus"]:checked');
    const campusUnioesteRadioElem = document.getElementById('js-campus-unioeste');
    const comentarioElem = document.getElementById('coment');

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
    alert('Avaliação enviada com sucesso!');

    // Guardando a avaliacao no local storage
    const avaliacao = {
        nota: nota,
        nome: nome,
        campus: campus,
        comentario: comentario
    }

    avaliacoes.unshift(avaliacao);
    localStorage.setItem('avaliacoes', avaliacoes);
}); 

// data do cardapio
dayjs.locale('pt-br');
const today = dayjs().format('DD [de] MMMM [de] YYYY');

const dataCardapioElem = document.querySelector('.js-data-cardapio');
dataCardapioElem.innerHTML = today;

// objeto cardapio do dia
const cardapio = {
    salada: [
        'Alface',
        'Tomate'
    ],
    guarnicoes: [
        'Arroz',
        'Feijão',
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