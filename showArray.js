'use strict'

const showArray = (array, element, title) => {
    // Selecionando o elemento no DOM
    const container = document.querySelector(element);
    // Criando um novo elemento, DIV
    const div = document.createElement('div');
    // Adiciona uma classe na DIV criada
    div.classList.add('numbers-container');

    // Populando a DIV nova com os elementos do array
    div.innerHTML = `
        <h2>${title}</h2>
        <div class="number-item">
            ${array.join('</div><div class="number-item">')}
        </div>
    `;

    // Inserindo a nova div no DOM
    container.appendChild(div);
};

export {
    showArray
};