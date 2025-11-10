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
console.log(inputNotaElem);
const spanNotaElem = document.querySelector('.valorNota');
console.log(spanNotaElem);

inputNotaElem.addEventListener('input', () => {
    console.log(1);
    spanNotaElem.textContent = inputNotaElem.value;
});