/*
    Salada salada
    Guarnições guarnicoes
    Proteínas proteinas
    Sobremesa sobremesa
    Bebida bebida
*/

// retorna os textos das comidas (to fznd aq)
for (const categoria in refeicao) {
    const itens = refeicao[categoria];
    const texto = `${categoria}: ${itens.join(', ')}`;
    console.log(texto);
}

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

// gerar o html do cardapio a partir do objeto
const saladaElem = document.querySelector('.js-salada');
// const saladaText = 






// input 'avalie sua refeicao'
const inputNotaElem = document.querySelector('.rangeNota');
const spanNotaElem = document.querySelector('.valorNota');
const starsElem = document.querySelector('.estrelas');

inputNotaElem.addEventListener('input', () => {
    const nota = inputNotaElem.value;

    spanNotaElem.textContent = nota;
    starsElem.src = `images/${nota}_stars.png`;
});