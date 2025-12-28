// Pegar código da refeição pelo parâmetro da URL
const info = new URLSearchParams(window.location.search);
const codigo = info.get('data');



// Transformar o código em data e inserir no título
const dataMobile = `${codigo.slice(0, 2)}/${codigo.slice(2, 4)}/${codigo.slice(4, 6)}`; // 2612251 -> 26/12/25

const dataDesktop = dayjs(dataMobile, "DD/MM/YY").format("DD [de] MMMM [de] YYYY"); // 26/12/25 -> 26 de dezembro de 2025

const tituloElemMobile = document.querySelector('.titulo-cardapio-mobile'); // dispositivos de tela menor
tituloElemMobile.innerHTML = `Cardápio - ${dataMobile}`;

const tituloElemDesktop = document.querySelector('.titulo-cardapio'); // dispositivos de tela maior
tituloElemDesktop.innerHTML = `Cardápio - ${dataDesktop}`;



// Trazer o array da refeição do local storage
const objetoRefeicao = JSON.parse(localStorage.getItem(`refeicao${codigo}`));

// Colocar os alimentos em suas categorias na página
for (const categoria in objetoRefeicao) {
    const arrayAlimentos = objetoRefeicao[categoria];
    
    let alimentosHTML = ``;

    arrayAlimentos.forEach((alimento) => {
        alimentosHTML +=
        `
            <div class="comida">${alimento}</div>
        `;
    })

    document.querySelector(`.js-${categoria}`).innerHTML = alimentosHTML;
}