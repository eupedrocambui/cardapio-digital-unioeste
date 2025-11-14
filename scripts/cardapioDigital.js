/*
    Salada salada
    Guarnições guarnicoes
    Proteínas proteinas
    Sobremesa sobremesa
    Bebida bebida
*/

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
        'Batata'
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
const inputNotaElem = document.querySelector('.rangeNota');
const spanNotaElem = document.querySelector('.valorNota');
const starsElem = document.querySelector('.estrelas');

inputNotaElem.addEventListener('input', () => {
    const nota = inputNotaElem.value;

    spanNotaElem.textContent = nota;
    starsElem.src = `images/${nota}_stars.png`;
});